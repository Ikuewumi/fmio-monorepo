import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import { createEffect, createMemo, createSignal, For, Show } from "solid-js";
import type { Country } from "../types";
import { getCountryData, getCtyNameFromAcronym } from "../api";

export default function Detail() {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    const ctyName = createMemo(() => location.pathname.split("/").at(-1))

    const [ctyData, setCtyData] = createSignal({} as unknown as Country)

    createEffect(async () => {
        if (location.pathname) {
            setCtyData({} as unknown as Country)
            try {
                console.log(params.id)
                console.log(ctyName())
                const ctyData = await getCountryData(decodeURIComponent(ctyName()))
                setCtyData(ctyData)
            } catch (e) {
                navigate('/404')
            }
        }
    })


    return (
        <>
            <A href="/" class="det-nav">Back</A>

            <Show when={ctyData().name} fallback={<span class="loading">Loading...</span>}>
                <section class="det-main">
                    <img src={ctyData().flags.png} alt={`Flag of ${ctyData().name}`} />

                    <article class="content">
                        <h2>{ctyData().name}</h2>
                        <div class="grp basic">
                            <h3 class="visually-hidden">Basic Information</h3>
                            <p><b>Native Name: </b>{ctyData().demonym}</p>
                            <p><b>Population: </b>{ctyData().population}</p>
                            <p><b>Region: </b>{ctyData().region}</p>
                            <p><b>Sub-Region: </b>{ctyData().subregion}</p>
                            <p><b>Capital: </b>{ctyData().capital}</p>
                        </div>
                        <div class="grp extra">
                            <h3 class="visually-hidden">More Data on Belgium</h3>
                            <p><b>Top Level Domain: </b>{ctyData().topLevelDomain}</p>
                            <p><b>Currencies: </b></p>
                            <p><b>Languages: </b>Dutch, French, German</p>
                        </div>
                        <div class="grp border">
                            <h3>Border Countries: </h3>
                            <ul class="bar">
                                <For each={ctyData().borders}>{(border) =>
                                    <li>
                                        <A
                                            href={`/details/${getCtyNameFromAcronym(border)}`}
                                            class="det-border">
                                            {getCtyNameFromAcronym(border)}
                                        </A>
                                    </li>
                                }</For>
                            </ul>
                        </div>
                    </article>
                </section>
            </Show>
        </>
    )



} 
