<script setup lang="ts">
  import { useStore } from '@nanostores/vue';
import { $settings, changeTheme, changeFont, type Settings } from '../stores';


  const settings = useStore($settings);
  const switchFont = (e:any) => {
    let newFont: Settings["font"]
    //@ts-ignore
    newFont= e.target.value;

    changeFont(newFont)

    
  }
</script>

<template>
  <header>

    <div class="logo">
      <svg viewBox="0 0 24 24">
        <use href="#logo"></use>
      </svg>
      <strong class="sr-only">Dictionary</strong>
    </div>

    <nav>
      <form @submit.prevent id="settings">
        <div class="field">
          <label for="font">
            <span class="sr-only">Font Family</span>
            <svg viewBox="0 0 24 24">
              <use href="#down-arrow"></use>
            </svg>
          </label>
          <select name="font" id="font" :value="settings.font" @change="switchFont">
            <option style="--font:Lora;" value="serif">serif</option>
            <option style="--font:Inter;" value="sans-serif">sans-serif</option>
            <option style="--font:Inconsolata;" value="monospace">monospace</option>
          </select>
        </div>
        <div class="field">
          <label for="dark-mode">
            <span class="sr-only">Dark Mode</span>
            <!--<button title="Toggle Theme"></button>-->
            <div class="theme-icon">
              <svg viewBox="0 0 24 24" class="icon-moon" v-if="!settings.darkMode">
                <use href="#moon"></use>
              </svg>
              <svg viewBox="0 0 24 24" class="icon-sun" v-else>
                <use href="#sun"></use>
              </svg>
            </div>
          </label>
          <input :checked="settings.darkMode" @change="() => {changeTheme()}"  type="checkbox" id="dark-mode" name="dark-mode">
        </div>
      </form>
    </nav>



  </header>
</template>

<style lang="scss" scoped>
header {
  --icon-size: 55px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-s);



  .logo>svg {
    color: var(--clr-dark-grey);
    margin-left: -0.5rem;
    transform: scaleX(1.25);
  }
}



form {
  display: flex;
  gap: 0;
}


.field {
  --icon-size: 25px;
  display: flex;
  gap: var(--field-gap, var(--space-xs));
  align-items: center;

  &:nth-child(1) {
    --icon-size: 30px;
    --field-padding: 0rem;
    --field-gap: 0;
    position: relative;

    svg {
      position: absolute;
      inset: 50% var(--field-padding) auto auto;
      transform: translateY(-50%);
      margin-top: 2px;
      margin-right: -0.5rem;
      color: var(--clr-primary);
      pointer-events: none;
    }


    select {
      background: var(--clr-background);
      border: none;
      padding: var(--space-3xs) 1.5rem var(--space-3xs) var(--field-padding);
      appearance: none;
      width: fit-content;
      text-align: right;

      font-weight: 700;
    }

    option {
      font-family: var(--font);
    }
  }



  &:nth-child(2) {
    --space: 0.75rem;
    padding-left: var(--space);
    margin-left: var(--space);
    border-left: 2px solid var(--clr-light-grey);

    input[type=checkbox] {
      appearance: none;
      height: 25px;
      aspect-ratio: 4/2;
      background: var(--clr-dark-grey);
      border-radius: 50vmax;
      order: -1;
      position: relative;
      padding-inline: 0.25rem;
      outline-offset: -0.25rem;
      outline-width: 5px;
      outline-color: var(--clr-primary);
      outline-style: none;

      &:focus-visible {
        outline-style: solid;
      }

      &:focus-visible:checked {
        outline-offset: -0.125rem;
        outline-color: hsl(0deg 0% 100% / 0.6);
      }

      &:before {
        content: "";
        position: absolute;
        inset: 50% auto auto auto;
        transform: translateY(-50%);
        height: 70%;
        aspect-ratio: 1;
        background-color: hsl(0deg 0% 100%);
        border-radius: 50%;
      }

      &:checked:before {
        right: 0.25rem
      }

      &:checked {
        background-color: var(--clr-primary);
      }
    }

    .theme-icon {
      --icon-size: 30px;
      display: flex;
      flex-direction: column;
      color: var(--clr-dark-grey);
      
    }

  }
}
</style>
