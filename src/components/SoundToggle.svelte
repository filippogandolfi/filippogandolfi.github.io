<script lang="ts">
  import { soundsEnabled, setSoundsEnabled, playHello } from '../lib/sounds';

  let on = $state(soundsEnabled());

  function toggle() {
    on = !on;
    setSoundsEnabled(on);
    if (on) playHello();
  }
</script>

<button
  class="sound-toggle"
  onclick={toggle}
  aria-pressed={on}
  title={on ? 'Sounds on — click to mute' : 'Sounds off — click to unmute'}
>
  <span aria-hidden="true">{on ? '🔔' : '🔕'}</span>
  <span class="label">{on ? 'sound on' : 'sound off'}</span>
</button>

<style>
  .sound-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--fern-deep);
    background: var(--fern-soft);
    border: 2px solid var(--fern);
    border-radius: 999px;
    padding: 0.25em 0.8em;
    cursor: pointer;
    transition: transform 120ms ease;
  }
  .sound-toggle:hover { transform: rotate(-2deg) scale(1.05); }
  .sound-toggle:active { transform: scale(0.95); }
  .sound-toggle:focus-visible {
    outline: 3px solid var(--leaf);
    outline-offset: 2px;
  }
  @media (max-width: 480px) {
    .label { display: none; }
  }
</style>
