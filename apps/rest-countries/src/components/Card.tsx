import { mergeProps, type Component } from "solid-js"
import { A } from "@solidjs/router";
import { fNum } from "../api";

interface Props {
    name: string
    img: string
    population: number
    region: string
    capital: string
}

const defaultProps: Props = {
    name: "Albania",
    img: "/ax.png",
    population: 4000000,
    region: "Europe",
    capital: "Tirana"
}


const Card: Component<Props> = (props) => {
    const mprops = mergeProps(defaultProps, props)

    return (
        <div class="card">
            <img src={mprops.img} alt={`Flag of ${mprops.name}`} />
            <div class="content">
                <A class="card-link" href={`/details/${mprops.name}`}><h2>{mprops.name}</h2></A>
                <p>
                    <b>Population: </b>
                    {fNum(mprops.population)}
                </p>
                <p>
                    <b>Region: </b>
                    {mprops.region}
                </p>
                <p>
                    <b>Capital: </b>
                    {mprops.capital}
                </p>
            </div>
        </div>

    )
}


export default Card
