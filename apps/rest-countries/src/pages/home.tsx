import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Home() {


    return (
        <>
            <NavBar />
            <div role="list" class="grid-flow">
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </div>
        </>
    );
}
