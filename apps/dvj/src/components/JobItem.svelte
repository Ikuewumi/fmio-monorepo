<script lang="ts">
        import type { JobPosting } from "../types";
        import { processImage } from "../composables/stores";

        export let posting: JobPosting;


        
</script>

<div class="job-item" style={`--company-clr:${posting.logoBackground}`}>
        <img class="job-image" src={processImage(posting.logo)} alt={posting.company} />
        <div class="job-duration">
                <span>{posting.postedAt}</span>
                <span>{posting.contract}</span>
        </div>
        <a href={`job/${posting.id}`}><h2 class="job-title">{posting.position}</h2></a>
        <div class="job-role">{posting.company}</div>
        <div class="job-location">{posting.location}</div>
</div>
