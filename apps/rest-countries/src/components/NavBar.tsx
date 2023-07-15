import { type Component, createSignal, createEffect } from "solid-js";
import { Search, ArrowDown } from "../icons/Icons";
import type { Country, NavItems } from "../types";

interface Props {
    filterData: (name: NavItems) => any
    searchData: (searchTerm: string) => any
}




const NavBar: Component<Props> = (props) => {
    const [opt, setOpt] = createSignal('all' as NavItems)

    createEffect(() => {
        if (opt()) props.filterData(opt())
    })

    const setSelect = (evt: Event) => {
        const el = evt.target! as HTMLSelectElement
        setOpt(el.value as NavItems)
    }

    const search = (evt: Event) => {
        const el = evt.target! as HTMLInputElement
        props.searchData(el.value)
    }




    return (
        <nav>
            <form class="f" onSubmit={(e) => e.preventDefault()}>
                <label for="search_term" class="f"><Search /></label>
                <input type="text" id="search_term" name="country" placeholder="Search for a Country" onInput={search} />
            </form>



            <div class="custom-select f">
                <select name="region" id="region" value={opt()} onChange={setSelect}>
                    <option value="all">Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
                <span class="arrow">
                    <ArrowDown />
                </span>
            </div>
        </nav>
    )

}


export default NavBar;
