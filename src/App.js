import "./App.scss"
import nebulae2 from "./images/nebulae-2.webp"
import nebulae3 from "./images/nebulae-3.webp"
import nebulae4 from "./images/nebulae-4.webp"
import nebulae5 from "./images/nebulae-5.webp"
import logo from "./images/logo.svg"

function App() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <img className="header__logo" src={logo} alt="Site logo" />
          <input type="checkbox" id="burger" className="header__burger-checkbox" />
          <nav className="menu">
            <a href="/" className="menu__link">
              Home
            </a>
            <a href="/" className="menu__link">
              Products
            </a>
            <a href="/" className="menu__link">
              <svg className="menu__cart-icon" viewBox="0 0 24 20" fill="none" width={24}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.2 18.2a1.8 1.8 0 0 0-3.7 0c0 1 .9 1.8 1.9 1.8 1 0 1.8-.8 1.8-1.8Zm13 0c0-1-.9-1.8-1.9-1.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8 1.9-.8 1.9-1.8ZM24 2.7c0-.5-.4-.9-1-.9H5.9C5.6 1.1 5.6 0 4.6 0H1A1 1 0 0 0 0 1c0 .4.4.8 1 .8h2.9l2.5 11.7c-.2.4-.9 1.5-.9 2s.5.9 1 .9h14.7c.5 0 1-.4 1-1 0-.4-.5-.9-1-.9H8c.1-.2.3-.5.3-.9l-.2-1 15-1.7c.6 0 1-.4 1-.9V2.7Z"
                  fill="#fff"
                />
                <defs>
                  <linearGradient
                    id="hover-gradient"
                    x1="8"
                    y1="4"
                    x2="19"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#EBFF00" />
                    <stop offset="1" stopColor="#FF70D9" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </nav>
        </div>
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
            <p className="card__description text text_bolder">it is a majestic journey to</p>
            <a className="card__link" href="/">
              Learn more
            </a>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), hsla(223, 35%, 9%, 0.79)), url('${nebulae4}')`,
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
          <input id="more" type="checkbox" className="info__input" />
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
          <p className="text info__text info__text_hidden">
            This part of the text is hidden by default. Experience the thrill of space travel with
            our state-of-the-art spacecraft, designed for ultimate safety and comfort. Our expert
            crew ensures an unforgettable journey, offering breathtaking views of Earth and the
            mesmerizing beauty of distant galaxies. Your adventure to the stars begins here.
          </p>
          <label className="info__input-label text text_secondary text_bolder" htmlFor="more"></label>
        </section>
      </main>
      <footer className="footer">
        <p className="text text_secondary footer__text">Exciting space adventure!</p>
      </footer>
    </>
  )
}

export default App
