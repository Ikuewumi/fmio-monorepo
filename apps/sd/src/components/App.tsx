import '@scss/index.scss';
import '@scss/layout.scss';
import '@scss/components.scss';
import Header from "@cmp/Header";
import { Card, LargeCard, type LargeCardProps, type SmallCardProps } from '@cmp/Cards';
import { Assets } from "@cmp/Assets";


const featuredInformation = [

  { title: "facebook", name: "@nathanf", change: 12, number: 1987 },
  { title: "twitter", name: "@nathanf", change: 99, number: 1044 },
  { title: "instagram", name: "@realnathanf", change: 1099, number: '11k' },
  { title: "youtube", name: "Nathan F.", change: -144, number: 8239 }


] as LargeCardProps[]



const todayInformation = [

  { title: 'facebook', event: 'Page Views', change: 3, number: 87 },
  { title: 'facebook', event: 'Likes', change: -2, number: 52 },
  { title: 'instagram', event: 'Likes', change: 2257, number: 5462 },
  { title: 'instagram', event: 'Profile Views', change: 1375, number: '52k' },
  { title: 'twitter', event: 'Retweets', change: 303, number: 117 },
  { title: 'twitter', event: 'Likes', change: 553, number: 507 },
  { title: 'youtube', event: 'Likes', change: -19, number: 107 },
  { title: 'youtube', event: 'Total Views', change: -12, number: 1407 },



] as SmallCardProps[]


function App() {

  return (
    <>
      <Header />

      <main>
        <ul class="list-featured">
          <For each={featuredInformation}>{(info, _) =>

            <li><LargeCard name={info.name} title={info.title} number={info.number} change={info.change} /></li>

          }</For>
        </ul>



        <section class="overview">
          <h2 class="overview-heading">Overview Today</h2>

          <ul class="list-today">
            <For each={todayInformation}>{(info, _) =>

              <li><Card event={info.event} title={info.title} number={info.number} change={info.change} /></li>

            }</For>
          </ul>

        </section>
      </main>

      <footer>
        <p>FMIO Challenge done by <a href="https://github.com/Ikuewumi" target="_blank">iKAY↗</a></p>
      </footer>



      <Assets />
    </>
  )
}

export default App
