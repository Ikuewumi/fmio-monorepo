import type { Component } from 'solid-js';
import { useRoutes } from '@solidjs/router';
import Header from "./components/Header";


import { routes } from './routes';

const App: Component = () => {
    // const location = useLocation();
    const Route = useRoutes(routes);

    return (
        <>
            <Header />
            <main class="wrapper">
                <Route />
            </main>
        </>
    );
};

export default App;
