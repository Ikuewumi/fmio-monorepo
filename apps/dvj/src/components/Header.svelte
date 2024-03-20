<script lang="ts">
      import { toggleTheme } from "../composables/localStorage"; 
</script>



<header class="header">
    <strong class="header-logo"><a href="/">devjobs</a></strong>

    <span class="header-theme">
      <button class="header-icon" title="light theme" tabindex="-1" on:click={toggleTheme.bind(null, "light")}>
        <span class="sr-only">To Light Theme</span>
        <svg viewBox="0 0 24 24">
          <use href="#sun" />
        </svg>
      </button>

      <button class="header-toggle" title="Toggle Theme" on:click={toggleTheme.bind(null, undefined)}></button>

      <button class="header-icon" title="dark theme" tabindex="-1" on:click={toggleTheme.bind(null, "dark")}>
        <span class="sr-only">To Dark Theme</span>
        <svg viewBox="0 0 24 24">
          <use href="#moon" />
        </svg>


      </button>
    </span>
  </header>

