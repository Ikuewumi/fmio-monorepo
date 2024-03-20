<script lang="ts">
  import Header from "./Header.svelte";
  import { router } from "../composables/router";
  import Search from "./Search.svelte";
  import JobItem from "./JobItem.svelte";
  import { JobPosting } from "../types";
  import JobPage from "./JobPage.svelte";

  let allJobs: JobPosting[] = [];
  let filteredJobs:JobPosting[] = [];
  

  async function getData() {
    allJobs = await loadData("/data.json");
    filteredJobs = allJobs
  };

  const findJob = () => {

    /**@ts-ignore */
    const param = $router?.params!.jobName as unknown as string;

    return allJobs.find(job => +param === job.id)!

  };



  const searchJobs = (e:CustomEvent<typeof searchFields.value>) => {
    const FULL_TIME = "Full Time"
    if (!e.detail) throw Error("invalid search")
    
    filteredJobs = allJobs.filter(job => {

      const hasTitle = job.position.includes(e.detail?.title!)
      const contractCorrect = !!(e.detail?.fullTimeOnly) ? job.contract === FULL_TIME : true;
      const locationCorrect = (typeof e.detail?.location === "string") ? job.location === e.detail.location : true;
      



      return hasTitle && contractCorrect && locationCorrect 
    })
  }
</script>

<a href="#main" id="skip-to-content">Skip To Content</a>
<Header />

{#await getData()}
<p class="loading">Loading...</p>
  {:then}
<main id="main">
  {#if $router?.route === "home"}
    <Search locationClues={allJobs.map(job=>job.location)} on:search-jobs={searchJobs} />
    <section id="all-jobs" class="">
      <h1 class="sr-only" id="all-jobs-title">All Jobs</h1>
      <ul class="job-list" aria-describedby="all-jobs-title">
        {#each filteredJobs as job, i (i)}
          <li><JobItem posting={job} /></li>
        {/each}
      </ul>

        <!--<button class="job-more">Load More</button>-->
    </section>
  {:else if $router?.route === "job"}
    {#if findJob()}
      <JobPage posting={findJob()} />
    {:else}
        <p class="error">Oops! Job Not Found, <a href="/">Go Home</a></p>
    {/if}
  {/if}
</main>

{:catch}

  <p class="error">Oops, something went wrong, <a href="/">Go Home</a> </p>

{/await}








<style lang="scss">

p.loading, p.error {


  margin-top: 2.5rem;
  font-size: var(--fs-600);

  a {
    text-decoration: none;
    color: var(--clr-purple);
    font-weight: 600;
  }

}


</style>
