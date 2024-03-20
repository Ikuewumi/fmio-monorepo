// Instantiate App Data, Local Storage. Router
// Get App Data, while starting up the Router, export the
//


import type { JobPosting } from "../types";
import type { Theme } from "./localStorage";
import { atom, map } from "nanostores"

export const loadData = async (url="/data.json") => {
        const res = await fetch(url);
        const json = await res.json()! as JobPosting[];

        return json
}






export const searchFields = map({
        title: "",
        location: "",
        fullTimeOnly: false
})


export const $theme = atom("auto" as Theme);



export const processImage = (str:string) => str.replace(/.\/assets/, "/images");
