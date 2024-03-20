import {createRouter} from "@nanostores/router";


export const router = createRouter({
        home: "/",
        job: "/job/:jobName"
}, { search: true });
   
