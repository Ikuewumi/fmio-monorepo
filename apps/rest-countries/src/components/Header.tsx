import { Component } from "solid-js";
import { DarkMode } from "./Icons";

const Header: Component = () => {

    return (
        <header>
            <div class="wrapper">
                <h1>Where In The World?</h1>
                <button class="theme">
                    <DarkMode />
                    <span>Dark Mode</span>
                </button>
            </div>
        </header>
    )


}


export default Header
