import type { Component } from 'solid-js';
import Header from "./components/Header.tsx";
import LCard from "./components/LCard.tsx";
import Card from "./components/Card.tsx";

const App: Component = () => {
    return (
        <>
            <Header />
            <ul class="grid-flow">
                <li>
                    <LCard name="@nathanf" change={12}
                        theme="#000" followers={1987} platform="facebook" />

                </li>

                <li>
                    <LCard name="@nathanf" change={99}
                        theme="#000" followers={1044} platform="twitter" />

                </li>

                <li>
                    <LCard name="@realnathanf" change={1099}
                        theme="#000" followers="11k" platform="instagram" />

                </li>


                <li>
                    <LCard name="Nathan F." change={-144}
                        theme="#000" followers={8239} platform="youtube" />

                </li>
            </ul>


            <section id="overview">
                <h2>Overview - Today</h2>

                <ul class="grid-flow">
                    <li><Card title="Page Views" platform="facebook" followers={87} change={3} /></li>
                    <li><Card title="Likes" platform="facebook" followers={52} change={-2} /></li>
                    <li><Card title="Likes" platform="instagram" followers={5462} change={2257} /></li>
                    <li>
                        <Card title="Profile Views" platform="instagram" followers="52k" change={1375} />
                    </li>
                    <li><Card title="Retweets" platform="twitter" followers={117} change={303} /></li>
                    <li><Card title="Likes" platform="twitter" followers={507} change={553} /></li>
                    <li><Card title="Likes" platform="youtube" followers={107} change={-19} /></li>
                    <li><Card title="Total Views" platform="youtube" followers={1407} change={-12} /></li>
                </ul>
            </section>
        </>
    );
};

export default App;
