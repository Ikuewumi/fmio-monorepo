import { A } from "@solidjs/router";

export default function Detail() {

    return (
        <>
            <A href="/" class="det-nav">Back</A>

            <section class="det-main">
                <img src="ax.png" alt="Country" />

                <article class="content">
                    <h2>Belgium</h2>
                    <div class="grp basic">
                        <h3 class="visually-hidden">Basic Information</h3>
                        <p><b>Native Name:</b> Belge</p>
                        <p><b>Population: </b> 11,319,511</p>
                        <p><b>Region: </b> Europe</p>
                        <p><b>Sub-Region: </b> Western Europe</p>
                        <p><b>Capital: </b> Brussels</p>
                    </div>
                    <div class="grp extra">
                        <h3 class="visually-hidden">More Data on Belgium</h3>
                        <p><b>Top Level Domain: </b> .be</p>
                        <p><b>Currencies: </b>Euro</p>
                        <p><b>Languages: </b>Dutch, French, German</p>
                    </div>
                    <div class="grp border">
                        <h3>Border Countries: </h3>
                        <div class="bar">
                            <button>France</button>
                            <button>Germany</button>
                            <button>Netherlands</button>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )



} 
