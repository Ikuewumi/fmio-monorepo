import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { appData } from "../api";
import { For, Show, createMemo, createSignal } from "solid-js";
import type { NavItems } from "../types";

export default function Home() {

    const [data, setData] = createSignal(appData())
    const [search, setSearch] = createSignal('')
    const filterCountries = (region: NavItems) => {
        const newData = appData().filter(cty => {
            if (region === 'all') return true
            return cty.region.toLowerCase() === region
        })

        setData(newData)
    }

    const searchCountry = (searchTerm: string) => {
        setSearch(searchTerm)
    }



    const derivedData = createMemo(() => {
        return data().filter((cty) => {
            if (search() === '') return true
            return cty.name.toLowerCase().includes(search())
        })
    })





    return (
        <>
            <NavBar filterData={filterCountries} searchData={searchCountry} />
            <div role="list" class="grid-flow">
                <Show when={derivedData().length}
                    fallback={<span class="loading" style="margin: 0">Could Not Find The Country 😢</span>}>
                    <For each={derivedData()}>{(cty) =>
                        <Card
                            name={cty.name} img={cty.flags.png}
                            capital={cty.capital} region={cty.region}
                            population={cty.population}
                        />
                    }
                    </For>
                </Show>
            </div>
        </>
    );
}
