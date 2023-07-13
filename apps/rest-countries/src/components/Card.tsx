import type { Component } from "solid-js"
import { A } from "@solidjs/router";



const Card: Component = () => {
    return (
        <div class="card">
            <img src="/ax.png" alt="Flag of Albania" />
            <div class="content">
                <A class="card-link" href="/details"><h2>Albania</h2></A>
                <p>
                    <b>Population: </b>
                    323,947,000
                </p>
                <p>
                    <b>Region: </b>
                    Americas
                </p>
                <p>
                    <b>Capital: </b>
                    Washington, D.C.
                </p>
            </div>
        </div>

    )
}


export default Card
