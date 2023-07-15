import { onMount, Show, type Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';
import { appData, setData } from './api';
import Header from "./components/Header";


import { routes } from './routes';

const App: Component = () => {
    // const location = useLocation();
    const Route = useRoutes(routes);

    // on mount get the data
    onMount(setData)



    return (
        <>
            <Header />
            <main class="wrapper">
                <Show when={appData().length} fallback={<span class="loading">Loading...</span>}>
                    <Route />
                </Show>
            </main>
        </>
    );
};

export default App;
