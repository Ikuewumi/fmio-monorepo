<script lang="ts">
  import { JobPosting } from "../types";
  import {processImage} from "../composables/stores"
  export let posting: JobPosting;
  
  const removeWebsitePrefix = (str:string) => {
    return str.replace(/https:\/\//, "")
  };


</script>

<section
  class="job-page"
  style={`--company-clr:${posting.logoBackground}`}
  data-grid
>
  <article class="jcompany">
    <img
      src={processImage(posting.logo)}
      alt="sco"
      class="jcompany-image"
    />
    <div class="jcompany-content">
      <div class="jcompany-info">
        <h2 class="jcompany-title">{posting.company}</h2>
        <small class="jcompany-website">{removeWebsitePrefix(posting.website)}</small>
      </div>
      <a href={posting.website} target="_blank" class="jcompany-link"
        >Company Site</a
      >
    </div>
  </article>
  <article class="jcontent">
    <div class="jinfo">
      <div class="jinfo-info">
        <div class="jinfo-duration">
          <span>{posting.postedAt}</span>
          <span>{posting.contract}</span>
        </div>

        <h2 class="jinfo-content">{posting.position}</h2>

        <strong class="jinfo-location">{posting.location}</strong>
      </div>
      <a href={posting.apply} target="_blank" class="jinfo-link">Apply Now</a>
    </div>

    <div class="jcont">
      <p>{posting.description}</p>
      <article>

      <h3 class="jcont-requirements">Requirements</h3>

      <p class="jcont-requirements-p">
        {posting.requirements.content}
      </p>

      <ul class="jcont-requirements-list">
        {#each posting.requirements.items[0].split(",") as requirement, i (i)}
          <li>{requirement}</li>
        {/each}
      </ul>

      </article>
      <article>

      <h3 class="jcont-roled">Roles</h3>

      <p class="jcont-requirements-p">
        {posting.role.content}
      </p>

      <ol class="jcont-requirements-list">
        {#each posting.role.items[0].split(",") as role, i (i)}
          <li>{role}</li>
        {/each}
      </ol>

      </article>


    </div>
  </article>
  <article class="japply" data-grid>
    <div class="japply-container">
      <div class="japply-content">
        <h2 class="japply-title">{posting.position}</h2>
        <div class="japply-company">{posting.company}</div>
      </div>

      <a href={posting.apply} target="_blank"  class="japply-link">Apply Now</a>
    </div>
  </article>
</section>
