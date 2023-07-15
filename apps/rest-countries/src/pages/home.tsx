import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { appData } from "../api";
import { For } from "solid-js";

export default function Home() {


    return (
        <>
            <NavBar />
            <div role="list" class="grid-flow">
                <For each={appData()}>{(cty) =>
                    <Card
                        name={cty.name} img={cty.flags.png}
                        capital={cty.capital} region={cty.region}
                        population={cty.population}
                    />
                }
                </For>
            </div>
        </>
    );
}
