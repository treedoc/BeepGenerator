<script lang="ts">
  let isBeeping = false;
  let intervalId: number;
  let context: AudioContext;

  // User-defined settings for beep sound
  let frequency = 440; // in Hz (A4)
  let volume = 0.1;
  let waveShape: OscillatorType = 'sine'; 
  let interval = 1000;
  let durationPercent = 0.1;    // 100ms.

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
    
    oscillator.start();
    oscillator.stop(context.currentTime + (durationPercent * interval)/1000); // Play the beep for 100ms
  }

  // Function to toggle the beeping sound
  function toggleBeeping() {
    initAudioContext();
    if (!isBeeping) {
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
      <input id="frequency" type="range" min="20" max="20000" step="10" bind:value={frequency} />
      <span>{frequency} Hz</span>
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
      <span>{interval} ms</span>
    </div>

    <div class="control-item">
      <label for="interval">Duration (%):</label>
      <input id="interval" type="range"  min="0" max="1" step="0.01" bind:value={durationPercent} />
      <span>{durationPercent}%</span>
    </div>

  </div>

  <!-- Button to toggle the beep sound -->
  <button on:click={toggleBeeping}>
    {isBeeping ? "Stop Beeping" : "Start Beeping"}
  </button>
</main>

<style>
</style>
