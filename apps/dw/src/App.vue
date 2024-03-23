<script setup lang="ts">
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Assets from "./components/Assets.vue";
import idleImageLink from "/read.svg"
import searchImageLink from "/search.svg"
import errorImageLink from "/404.svg"
import { $appData, $computedPhonetic, searchForWord } from "./stores/index";
import { useStore } from "@nanostores/vue";
import { ref } from "vue";


const appData = useStore($appData);
const phonetic = useStore($computedPhonetic);
const audio = ref(null! as unknown as HTMLAudioElement)


const pronounce = () => {
  audio.value.play();
}
</script>

<template>
  <Header />
  <main>
    <Search />
    <section class="word-state loading" v-if="appData.loading">
      <img :src="searchImageLink" class="searching" alt="Searching Dictionary!">
      <p>Searching For Your Word....</p>
    </section>


    <section class="word" v-else-if="appData.word">
      <article class="header">
        <div class="header-content">
          <h2>{{ appData.word.word }}</h2>
          <p class="header-phonetics" v-if="phonetic">
            {{ phonetic.text }}
          </p>
        </div>
        <div class="header-audio" v-if="phonetic?.audio?.length">
          <audio ref="audio" :src="phonetic?.audio" aria-hidden="true"></audio>
          <button title="Pronounce" @click="pronounce">
            <span class="sr-only">Pronounce</span>
            <svg viewBox="0 0 24 24" title="Pronounce">
              <use href="#play"></use>
            </svg></button>
        </div>
      </article>
      <ul class="meanings">
        <li v-for="(meaning, index) in appData.word.meanings" :key="index">

          <div class="meaning">
            <p class="meaning-speechpart">{{ meaning.partOfSpeech }}</p>

            <h3 class="meaning-header">Meaning</h3>

            <ul class="definitions">
              <li v-for="(definition, index) in meaning.definitions" :key="index">
                <div class="definition-content">
                  <p class="definition-definition">{{ definition.definition }}</p>
                  <p class="definition-example" v-if="definition.example">
                    {{ definition.example }}
                  </p>
                </div>
              </li>
            </ul>

            <div class="meaning-synonyms" v-if="meaning.synonyms?.length">
              <strong>Synonyms</strong>
              <ul>
                <li v-for="(word, index) in new Set(meaning.synonyms)" :key="index"><button
                    @click="() => searchForWord(word)">{{ word }}</button></li>
              </ul>
            </div>


            <div class="meaning-antonyms" v-if="meaning.antonyms?.length">
              <strong>Antonyms</strong>
              <ul>
                <li v-for="(word, index) in new Set(meaning.antonyms)" :key="index"><button
                    @click="() => searchForWord(word)">{{ word }}</button></li>
              </ul>
            </div>



          </div>

        </li>

      </ul>
      <article class="sources" v-if="appData.word.sourceUrls.length">
        <strong>Source</strong>
        <a target="_blank" :href="appData.word.sourceUrls[0]">{{ appData.word.sourceUrls[0]  }} [↗]</a>
      </article>
    </section>
    <section class="word-state error" v-else-if="(!appData.word) && appData.searchTerm.length">
      <img :src="errorImageLink" class="error" alt="Error Dictionary!">
      <p>Could not find the word!</p>
    </section>


    <section class="word-state empty" v-else>
      <img :src="idleImageLink" class="idle" alt="Idle Dictionary!">
      <p>Learn a word's meaning by searching for it!</p>
    </section>

  </main>
  <footer></footer>


  <Assets v-once />
</template>

<style lang="scss" scoped>
.word-state {
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--clr-background);
  margin-top: 2rem;
  padding: 1rem 0.25rem 1.25rem 0.25rem;
  border-radius: var(--space-s);
  box-shadow: 0 0.5px 3px -1.5px var(--clr-color);
  text-align: center;



  img {
    width: inherit;
    max-height: 275px;
    object-fit: contain;
  }

}



.header {

  display: flex;
  gap: 0.25rem;
  margin-top: var(--space-m);
  align-items: start;
  justify-content: space-between;




  &-content {
    flex-shrink: none;
    width: 100%;
    display: grid;
    gap: 0.45rem;

    h2 {
      font-size: var(--font-size-5);
      font-weight: 700;
      line-height: 0.95;
      word-break: break-all;
    }

    p {
      color: var(--clr-primary);
      font-weight: 500;
      font-size: var(--font-size-0);
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
  }





  &-audio {
    --icon-size: 40px;
    flex-shrink: 0;
    flex-grow: 0;


    button {
      --bg: var(--clr-light-primary);
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 4px -1px var(--clr-background);
      background: var(--bg);
      color: var(--clr-primary);
      cursor: pointer;
    }
  }

  audio {
    display: none;
  }
}





.meanings {
  display: grid;
  gap: 0;
  margin-top: var(--space-l);
  list-style-type: disc;

  &>li {
    display: contents;
  }

  .meaning {
    display: grid;
    gap: var(--space-xs);
    padding-bottom: var(--space-xl);
    position: relative;
    isolation: isolate;


    &:last-child {
      padding-bottom: var(--space-l);
    }

    &:before {
      content: "";
      position: absolute;
      inset: 1.25rem 0 auto 0;

      width: 100%;
      height: 1px;
      background: var(--clr-light-grey);
      z-index: -1;
    }

    &-speechpart {
      align-self: start;
      padding-right: 0.4rem;
      width: fit-content;
      background: var(--clr-background);
      font-size: var(--font-size-1);
      font-weight: 900;
      font-style: italic;
    }


    h3 {
      margin-top: var(--space-xs);
      color: var(--clr-dark-grey);
      font-size: var(--font-size-0);
    }

    &-synonyms,
    &-antonyms {
      margin-top: 1.5rem;
      display: flex;
      gap: 0.75rem;

      font-size: var(--font-size-n1);
      font-weight: 700;
      flex-wrap: wrap;

      strong {
        font-weight: 500;
      }

      button {
        border: none;
        padding: 0;
        background: none;
        cursor: pointer;
      }


      ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        color: var(--clr-primary);
      }


      li:after {
        content: ","
      }


      li:nth-last-child(1):after {
        content: none;

      }

    }

  }



  .definitions {
    display: grid;
    gap: var(--space-xs);
    list-style-type: disc;
    padding-inline-start: 0.75rem;


    li {
      display: flex;
      gap: 0.75rem;

      &:before {
        content: "";
        width: 9px;
        aspect-ratio: 1;
        background: var(--clr-primary);
        border-radius: 50%;
        align-self: start;
        flex: 0 0 auto;
        margin-top: 0.5rem;

      }
    }

  }

  .definition {
    &-example {
      margin-top: 0.25rem;
      font-style: italic;
      color: var(--clr-dark-grey);

    }


  }
}

.sources {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  padding-block: 1rem 1.5rem;
  border-top: 1px solid var(--clr-light-grey);

  strong {
    font-size: var(--font-size-n1);
    font-weight: 700;
  }


}

</style>
