import { createSignal } from "solid-js";
import type { Country } from "./types";

export const [appData, setAppData] = createSignal([] as Country[])


const getData = async () => {
    const res = await fetch("/data.json")
    if (!res.ok) throw Error("something went wrong");
    const data = await res.json()
    return data as Country[]
}


export const setData = async () => {
    const data = await getData()
    setAppData(data)
}


export const getCountryData = async (name: string) => {
    if (!appData()) await setData()
    const country = appData().find(cty => cty.name === name)
    if (!country) throw Error('data not found')
    return country;
}



export const getCtyNameFromAcronym = (name: string) => {
    const cty = appData().find(cty => cty.alpha3Code === name)?.name ?? 'Afghanistan'
    return cty
}
