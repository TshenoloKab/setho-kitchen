import aboutImg from '../assets/about.jpg'
import platterImg from '../assets/platter.jpg'
import './About.css'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Setho Kitchen</h1>
          <p className="page-hero__lead">
            A Botswana-based catering business passionate about good food, quality ingredients and creating
            memorable experiences.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-grid__img">
            <img src={aboutImg} alt="Fresh ingredients being prepared in a kitchen" />
          </div>
          <div className="about-grid__text">
            <span className="eyebrow">Our Story</span>
            <h2>Food that brings people together</h2>
            <p>
              Setho Kitchen was born from a simple belief: that good food has the power to bring people together.
              Based in Gaborone, we prepare thoughtful, flavourful meals for everyday enjoyment and for life's
              special moments.
            </p>
            <p>
              We care about quality ingredients, careful preparation and beautiful presentation. Whether it is a
              family dinner, a birthday celebration or a corporate meeting, we approach every occasion with the
              same attention and warmth.
            </p>
            <p>
              Our menus blend familiar local flavours with modern catering presentation, so your guests feel both
              comforted and delighted.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container values">
          <div className="section-head">
            <span className="eyebrow">What We Value</span>
            <h2>The principles behind every plate</h2>
          </div>
          <div className="values__grid">
            <div className="value">
              <h3>Quality Ingredients</h3>
              <p>We select fresh, good-quality ingredients and handle them with care from kitchen to table.</p>
            </div>
            <div className="value">
              <h3>Thoughtful Preparation</h3>
              <p>Every dish is prepared with attention to flavour, balance and presentation.</p>
            </div>
            <div className="value">
              <h3>Warm Hospitality</h3>
              <p>We treat every client and every event with genuine warmth and professionalism.</p>
            </div>
            <div className="value">
              <h3>Flexible Menus</h3>
              <p>Menus are tailored to your occasion, your guests and your preferences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <img src={platterImg} alt="A beautifully arranged catering platter" />
          <div>
            <h2>Let us cater your next occasion</h2>
            <p>From intimate gatherings to corporate events, we would love to bring Setho Kitchen to your table.</p>
            <a href="https://wa.me/267XXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}