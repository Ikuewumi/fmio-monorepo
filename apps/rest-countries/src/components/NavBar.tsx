import { Component } from "solid-js";
import { Search, ArrowDown } from "../icons/Icons";


const NavBar: Component = () => {



    return (
        <nav>
            <form class="f">
                <label for="search_term" class="f"><Search /></label>
                <input type="text" id="search_term" name="country" placeholder="Search for a Country" />
            </form>



            <div class="custom-select f">
                <select name="region" id="region">
                    <option value="all">Filter By Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="ocenia">Ocenia</option>
                </select>
                <span class="arrow">
                    <ArrowDown />
                </span>
            </div>
        </nav>
    )

}


export default NavBar;
