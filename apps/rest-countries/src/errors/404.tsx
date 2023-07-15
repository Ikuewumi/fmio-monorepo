import { A } from "@solidjs/router";

export default function NotFound() {
    return (
        <>
            <A href="/" class="det-nav">Back</A>
            <section class="err">
                <h2>404: Not Found</h2>
                <p>It's gone 😞</p>
            </section>
        </>
    );
}
