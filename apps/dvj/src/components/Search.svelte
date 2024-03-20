<script lang="ts">
import { searchFields } from "../composables/stores";
export let locationClues = ["Arkansas"];

const emit = createEventDispatcher();
const emitSearch = () => {
        const formData = {
                title: $searchFields.title,
                fullTimeOnly: $searchFields.fullTimeOnly
        } as typeof searchFields.value;

        if (locationClues.find(location=> location === $searchFields.location)) formData!["location"] = $searchFields.location
        emit("search-jobs", {
               ...formData 
        })

}
</script>

<form class="search" on:submit|preventDefault={emitSearch}>
        <div class="search-field">
                <label for="job-title">
                        <span class="sr-only">Search Job Title</span>
                        <svg viewBox="0 0 24 24">
                                <use href="#search"></use>
                        </svg>
                </label>
                <input
                        id="job-title"
                        type="search"
                        placeholder="Filter by title"
                        bind:value={$searchFields.title}
                />
        </div>
        <div class="search-field">
                <label for="job-location">
                        <span class="sr-only">Search Job Location</span>
                        <svg viewBox="0 0 24 24">
                                <use href="#location"></use>
                        </svg>
                </label>
                <input
                        list="locations"
                        id="job-location"
                        type="search"
                        placeholder="Filter by Location"
                        bind:value={$searchFields.location}
                />
        </div>
        <div class="search-field">
                <label for="job-duration">Full Time Only</label>
                <input id="job-duration" type="checkbox" bind:checked={$searchFields.fullTimeOnly}/>
        </div>
        <details class="search-filter html-only">
                <summary
                        ><svg viewBox="0 0 24 24">
                                <use href="#filter"></use>
                        </svg></summary
                >
                <div class="search-mobile">
                        <div class="search-mfield">
                                <label for="job-mlocation">
                                        <span class="sr-only"
                                                >Search Job Location</span
                                        >
                                        <svg viewBox="0 0 24 24">
                                                <use href="#location"></use>
                                        </svg>
                                </label>
                                <input
                                        list="locations"
                                        id="job-mlocation"
                                        type="search"
                                        placeholder="Filter by Location"
                                        bind:value={$searchFields.location}
                                />
                        </div>
                        <div class="search-mfield">
                                <label for="job-mduration">Full Time Only</label
                                >
                                <input id="job-mduration" type="checkbox" bind:checked={$searchFields.fullTimeOnly} />
                        </div>
                </div>
        </details>
        <button class="search-button">
                <span>Search</span>
                <svg viewBox="0 0 24 24">
                        <use href="#search"></use>
                </svg>
        </button>



        <datalist id="locations">
                {#each locationClues as location, i (i) }
                        <option value={location}></option>
                {/each}
        </datalist>
</form>
