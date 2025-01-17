<script lang="ts">
  
  let isBeeping = false;
  let intervalId: number;
  let context: AudioContext;

  // User-defined settings for beep sound
  let frequency = 440; // in Hz (A4)
  let logFreq = Math.log(frequency); 
  let maxLogFrequent = Math.log(20000);

  $: frequency = round(Math.pow(Math.E, logFreq), 100);
  

  let volume = 0.5;
  let waveShape: OscillatorType = 'sine'; 
  let interval = 1000;
  let durationPercent = 0.04;

  let startTime = 0;
  let lastTime = 0; 

  class Log {
    time: number;
    interval: number;
    constructor(time: number, interval: number) {
      this.time = round(time, 100);
      this.interval = round(interval, 100);
    }
  }
  const MAX_LOG = 10;

  let logs: Log[] = []


  function round(n: number, factor: number) : number {
    return Math.round(n * factor) / factor;
  }

  // Initialize the AudioContext
  function initAudioContext() {
    if (!context) {
      context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  function playBeep() {
    const oscillator = context.createOscillator();
    oscillator.type = waveShape;
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
    
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(volume, context.currentTime);
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    const now = performance.now();
    oscillator.start();
    oscillator.stop(context.currentTime + (durationPercent * interval)/1000); // Play the beep for 100ms

    logs.push(new Log(now - startTime, now - lastTime));
    if (logs.length > MAX_LOG)
      logs.splice(0, logs.length - MAX_LOG);
    logs = logs;
    lastTime = now;
  }

  // Function to toggle the beeping sound
  function toggleBeeping() {
    initAudioContext();
    if (!isBeeping) {
      lastTime = startTime = performance.now();
      intervalId = setInterval(playBeep, interval); // Play beep at selected interval
      isBeeping = true;
    } else {
      clearInterval(intervalId); // Stop the beeping
      isBeeping = false;
    }
  }

</script>

<main class="container">
  <h1>Beep Sound Generator</h1>

  <!-- Controls for frequency, volume, wave shape, and intervals -->
  <div class="controls">
    <div class="control-item">
      <label for="frequency">Frequency (Hz):</label>
      <input id="frequency" type="range" min="{Math.log(10)}" max="{maxLogFrequent}" step="0.1" bind:value={logFreq} />
      <input id="frequency" type="number" min="20" max="20000" bind:value={frequency} />
    </div>

    <div class="control-item">
      <label for="volume">Volume:</label>
      <input id="volume" type="range" min="0" max="1" step="0.01" bind:value={volume} />
      <span>{volume}</span>
    </div>

    <div class="control-item">
      <label for="waveShape">Wave Shape:</label>
      <select id="waveShape" bind:value={waveShape}>
        <option value="sine">Sine</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="sawtooth">Sawtooth</option>
      </select>
    </div>

    <div class="control-item">
      <label for="interval">Interval (ms):</label>
      <input id="interval" type="number" min="100" max="5000" step="100" bind:value={interval} />
    </div>

    <div class="control-item">
      <label for="duration">Duration (%):</label>
      <input id="duration" type="range"  min="0.01" max="1" step="0.01" bind:value={durationPercent} />
      <span>{round(durationPercent * 100, 100)}%</span>
    </div>

  </div>

  <!-- Button to toggle the beep sound -->
  <button on:click={toggleBeeping}>
    {isBeeping ? "Stop Beeping" : "Start Beeping"}
  </button>

  <table>
    <thead>
    <tr><th>Time</th><th>interval</th></tr>
    </thead>
    <tbody>
    {#each logs as log}
      <tr><td>{log.time}</td><td>{log.interval}</td></tr>
    {/each}
    </tbody>
  </table>
</main>

<style>
</style>
