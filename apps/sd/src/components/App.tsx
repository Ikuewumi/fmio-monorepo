import '@scss/index.scss';
import '@scss/layout.scss';
import '@scss/components.scss';
import Header from "@cmp/Header";
import { Card, LargeCard } from '@cmp/Cards';
import {Assets} from "@cmp/Assets";
function App() {

  return (
    <>
      <Header />
      
      <main>
        <ul class="list-featured">
          <li><LargeCard /></li>
          <li><LargeCard /></li>
          <li><LargeCard /></li>
          <li><LargeCard /></li>
        </ul>


        
        <section class="overview">
          <h2 class="overview-heading">Overview Today</h2>

          <ul class="list-today">
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
            <li><Card /></li>
          </ul>

        </section>
      </main>

      <footer>
        <p>FMIO Challenge done by <a href="https://github.com/Ikuewumi" target="_blank">Ayobami</a></p>
      </footer>



      <Assets />
    </>
  )
}

export default App
