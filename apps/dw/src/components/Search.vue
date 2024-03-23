<script setup lang="ts">
import { useStore } from '@nanostores/vue';
import { $appData, searchForWord } from '../stores';
import { ref } from 'vue';

const appData = useStore($appData);
const input = ref("")
const search = () => {
  return searchForWord(input.value)

}
</script>

<template>
<form id="search" @submit.prevent="search">
  <input type="search" placeholder="Enter a word to search!" v-model="input" :disabled="appData.loading">
  <button title="Search!" :disabled="appData.loading"><svg viewBox="0 0 24 24"><use href="#magnify"></use></svg></button>
</form>
</template>



<style lang="scss" scoped>


form {
  --icon-size: 30px;
  display: flex;
  align-items: center;
  gap: var(--space-3xs);
  padding: var(--space-xs) var(--space-s);
  margin-top: 0.5rem;
  background: var(--clr-light-grey);
  border-radius: var(--space-2xs);
  font-weight: 700;
  * {
    background: transparent;
    border: none;

    &:disabled {
      cursor: not-allowed;
    }
  }
            

  button {
    color: var(--clr-primary);
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    outline: none; 

  }



}



</style>
