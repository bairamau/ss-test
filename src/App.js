import "./App.scss"
import nebulae2 from "./images/nebulae-2.webp"
import nebulae3 from "./images/nebulae-3.webp"
import nebulae4 from "./images/nebulae-4.webp"
import nebulae5 from "./images/nebulae-5.webp"

function App() {
  return (
    <>
      <header className="header">
        <nav>
          <a>Home</a>
          <a>Products</a>
        </nav>
      </header>
      <main className="main">
        <section className="section hero">
          <div className="container hero__container">
            <h1 className="text text_bolder hero__title">
              Discover the vast expanses of{" "}
              <span className="text text_bolder text_primary">space</span>
            </h1>
            <p className="text text_bolder hero__subtitle">
              Where the possibilities are{" "}
              <span className="text text_bolder text_secondary">endless!</span>
            </p>
            <a className="hero__link" href="/">
              Learn more
            </a>
          </div>
        </section>

        <section className="container section offers">
          <h2 className="section__title offers__title">Offers</h2>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${nebulae2}')`,
            }}
            className="card card_large"
          >
            <h3 className="card__title text text_bolder card__title_large">
              Move the borders of reality!
            </h3>
            <p className="card__description text text_bolder card__description_large">
              Go on a space adventure
            </p>
            <a className="card__link" href="/">
              Learn more
            </a>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${nebulae3}')`,
            }}
            className="card"
          >
            <h3 className="card__title text text_bolder">Space is not just stars and planets</h3>
            <p className="card__description text text_bolder">Go on a space adventure</p>
            <a className="card__link" href="/">
              Learn more
            </a>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${nebulae4}')`,
            }}
            className="card"
          >
            <h3 className="card__title text text_bolder">For those who dream of stars</h3>
            <p className="card__description text text_bolder">
              Our offer: make your dream come true
            </p>
            <a className="card__link" href="/">
              Learn more
            </a>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${nebulae5}')`,
            }}
            className="card card_large"
          >
            <h3 className="card__title text text_bolder card__title_large">
              Fulfill your fantastic dreams
            </h3>
            <p className="card__description text text_bolder card__description_large">
              Space has never been so close
            </p>
            <a className="card__link" href="/">
              Learn more
            </a>
          </div>
        </section>

        <section className="container section info">
          <h2 className="section__title">Embark on a space journey</h2>
          <p className="text info__text">
            Traveling into space is one of the most exciting and unforgettable adventures that can
            change your life forever. And if you have ever dreamed of exploring stars, planets and
            galaxies, then our company is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all the secrets of the
            universe. We guarantee that every moment in space will be filled with incredible
            impressions, excitement and new discoveries. Our team of professionals takes care of
            your safety and comfort so that you can fully enjoy your adventure in space. We offer
            various options for space excursions.
          </p>
          <button className="text text_secondary info__button">Read more</button>
        </section>
      </main>
      <footer className="footer">
        <p className="text text_secondary footer__text">Exciting space adventure!</p>
      </footer>
    </>
  )
}

export default App
