import "./App.scss"

function App() {
  return (
    <>

      <main class="main">

        <section class="info">
          <picture class="info-picture">
            <img src="./images/avatar-jessica.jpeg" alt="Jessica Randall" class="info-img" />
          </picture>
          <h1 class="info-name">Jessica Randall</h1>
          <p class="info-jobtitle">London, United Kingdom</p>
          <span class="info-jobdesc">"Front-end developer and avid reader"</span>
        </section>

        <section class="links">
          <ul class="links-list">
            <li class="link-li"><a href="#" class="link-a">GitHub</a></li>
            <li class="link-li"><a href="#" class="link-a">Frontend Mentor</a></li>
            <li class="link-li"><a href="#" class="link-a">LinkedIn</a></li>
            <li class="link-li"><a href="#" class="link-a">Twitter</a></li>
            <li class="link-li"><a href="#" class="link-a">Instagram</a></li>
          </ul>
        </section>


      </main>

    </>
  )
}

export default App
