<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  let isBeeping = false;
  let intervalId: number;
  let context: AudioContext;

  // User-defined settings for beep sound
  let frequency = 440; // Default frequency in Hz (A4)
  let volume = 0.1; // Default volume
  let waveShape: OscillatorType = 'sine'; // Default wave shape
  let interval = 1000; // Default interval in milliseconds

  // Initialize the AudioContext
  function initAudioContext() {
    if (!context) {
      context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  // Function to play a beep sound
  function playBeep() {
    const oscillator = context.createOscillator();
    oscillator.type = waveShape; // Apply the selected wave shape (sine, square, etc.)
    oscillator.frequency.setValueAtTime(frequency, context.currentTime); // Apply the selected frequency
    
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(volume, context.currentTime); // Apply the selected volume
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    oscillator.start();
    oscillator.stop(context.currentTime + 0.1); // Play the beep for 100ms
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
      <input id="frequency" type="range" min="100" max="1000" step="10" bind:value={frequency} />
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
  </div>

  <!-- Button to toggle the beep sound -->
  <button on:click={toggleBeeping}>
    {isBeeping ? "Stop Beeping" : "Start Beeping"}
  </button>
</main>

<style>
</style>
