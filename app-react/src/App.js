import './App.css';
import shapes from './images/shapes.png';
import Nav from './components/Nav';

function App() {
  return (
    <div className="container">
      <header>
        <a href="#" className="logoLink">
          <span className="logoLink__text">W.</span>
        </a>
        <Nav />
      </header>

      <section className="mainSection">
        <figure className="post">
          <img src={shapes} className="image" />
          <figcaption>
            <h3 className="title">The bright future of Web 3.0?</h3>
            <p className="description">
              We drive into the next evolution of the web that claims
              to put the power of the platforms back into the hands
              of the people. But it's really fulfilling its promise?
            </p>
            <a href="#" className="readMoreLinks">Read more</a>
          </figcaption>
        </figure>
        <ul className="listNews">
          <li><span>New</span></li>
          <li>
            <a href="#">Hydrogen VS electric car</a>
            <p>We drive into the next evolution of the web</p>
          </li>
          <li>
            <a href="#">Hydrogen VS electric car</a>
            <p>We drive into the next evolution of the web</p>
          </li>
          <li>
            <a href="#">Hydrogen VS electric car</a>
            <p>We drive into the next evolution of the web</p>
          </li>
        </ul>
      </section>

      <section className="articlesSection">
        <figure className="shortArticle">
          <img src={require('./images/picture_1.png')} />
          <figcaption>
            <span className="number">01</span>
            <h3>Top 10 laptops</h3>
            <p className="description">We drive into the next evolution of the web</p>
          </figcaption>
        </figure>

        <figure className="shortArticle">
          <img src={require('./images/picture_2.png')} />
          <figcaption>
            <span className="number">02</span>
            <h3>Top 10 laptops</h3>
            <p className="description">We drive into the next evolution of the web</p>
          </figcaption>
        </figure>

        <figure className="shortArticle">
          <img src={require('./images/picture_3.png')} />
          <figcaption>
            <span className="number">03</span>
            <h3>Top 10 laptops</h3>
            <p className="description">We drive into the next evolution of the web</p>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}

export default App;
