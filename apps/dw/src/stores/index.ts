import { computed, map } from "nanostores";

interface Licence {
        name: string,
        url: string
}

interface Phonetic {
        text: string,
        audio: string,
        sourceUrl?: string,
        licence?: Licence
}

interface Definition {
        definition: string,
        synonyms: string[],
        antonyms: string[],
        example: string
}

interface Meaning {
        partOfSpeech: string,
        synonyms: string[],
        antonyms: string[],
        definitions: Definition[]
}



type Word = {
        word: string,
        phonetics: Phonetic[],
        meanings: Meaning[]
        licence?: Licence,
        sourceUrls: string[]
} | null



export interface Settings {
        darkMode: boolean,
        font: typeof FONTS[number]
}





const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en";
//const DICTIONARY_API = "/data.json";
/**Stores the local storage key for the settings*/
const SETTINGS_KEY = "dictionary:settings";
const FONTS = ["serif", "sans-serif", "monospace"] as const

export const $appData = map({
        searchTerm: "",
        word: null as Word,
        loading: false
})


export const $computedPhonetic = computed($appData, appData => {
        if (!appData?.word) return null

        const phonetic = appData.word.phonetics.find(phonetic => {
                return phonetic.audio > "" && phonetic.text > ""
        })

        return phonetic ?? (appData.word.phonetics[0] ?? null);
})



export const searchForWord = async (word: string) => {
        try {
                const word_ = word.trim().toLowerCase();

                $appData.setKey("searchTerm", word_)
                $appData.setKey("loading", true);
                $appData.setKey("word", null);

                if (!word_) return;


                const res = await fetch(`${DICTIONARY_API}/${word_}`);
                //const res = await fetch(`${DICTIONARY_API}`);
                if (!res.ok) throw Error("something wrong happened");

                const json = await res.json() as Word[];
                if (!json) throw Error("something went wrong");

                $appData.setKey("word", json[0]);
                $appData.setKey("searchTerm", "");
        }
        catch (e) { }
        finally {
                $appData.setKey("loading", false);
        }
}


const darkModeMediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

/**On Startup, This Function returns an object with the darkTheme, and font based on the localStorage, or if there is no stored Data, returns the default settings */
const getSettings = ():Settings => {
        try {
                const lsData = localStorage.getItem(SETTINGS_KEY);

                if (!lsData) throw Error("no stored data")
                const settings = JSON.parse(lsData)! as Settings;
                if (!FONTS.includes(settings?.font)) throw Error("invalid stored font");
                if (typeof settings?.darkMode !== "boolean") throw Error("invalid stored mode");

                return settings

        }
        catch (e) {
                return {
                        darkMode: darkModeMediaQueryList.matches,
                        font: "serif"
                }
        }
}



export const $settings = map(getSettings())


$settings.subscribe(settings => {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        const html = document.querySelector("html")!;

        html.setAttribute("data-dark-theme", `${settings.darkMode}`);
        html.setAttribute("data-font", settings.font);

})


export const changeTheme = () => $settings.setKey("darkMode", !$settings.get().darkMode);

export const changeFont = (font: Settings["font"]) => {
        if (!FONTS.includes(font)) throw Error("invalid Font");        
        return $settings.setKey("font", font);
}



