import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.jpg'
import platterImg from '../assets/platter.jpg'
import dessertImg from '../assets/dessert.jpg'
import './Home.css'

const offerings = [
  { title: 'Everyday Meals', desc: 'Fresh, satisfying meals prepared with care for everyday enjoyment.', img: platterImg },
  { title: 'Traditional Botswana-Inspired Dishes', desc: 'Local favourites and familiar flavours, beautifully presented.', img: '/traditional-food.jpg' },
  { title: 'Party Platters', desc: 'Generous, colourful platters designed to impress your guests.', img: platterImg },
  { title: 'Corporate Catering', desc: 'Professional catering for meetings, launches and office events.', img: dessertImg },
  { title: 'Special Occasion Catering', desc: 'Tailored menus for weddings, birthdays and celebrations.', img: heroImg },
  { title: 'Desserts & Treats', desc: 'Sweet finishes and baked goods to complete any occasion.', img: dessertImg },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img src={heroImg} alt="Beautifully presented catering platter with fresh food" />
        </div>
        <div className="hero__content container">
          <span className="eyebrow">Setho Kitchen · Gaborone, Botswana</span>
          <h1>Good Food. Beautifully Made.</h1>
          <p className="hero__lead">
            From intimate gatherings to special celebrations and corporate events, Setho Kitchen brings people
            together through thoughtfully prepared food and memorable catering experiences.
          </p>
          <div className="hero__actions">
            <Link to="/menu" className="btn btn--primary">Explore Our Menu</Link>
            <Link to="/contact" className="btn btn--accent">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container intro">
          <div className="intro__text">
            <span className="eyebrow">Welcome</span>
            <h2>A catering experience built around good food</h2>
            <p>
              Setho Kitchen is a Botswana-based catering business passionate about good food, quality ingredients
              and creating memorable experiences. Whether you are hosting a small family gathering or a large
              corporate event, we prepare food that feels generous, looks beautiful and tastes like home.
            </p>
            <p>
              Every menu is thoughtfully considered and can be tailored to your occasion, your guests and your
              taste.
            </p>
            <Link to="/about" className="btn btn--outline">Learn About Us</Link>
          </div>
          <div className="intro__image">
            <img src={platterImg} alt="Colourful catering platter arranged on a table" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Catering for every occasion</h2>
            <p>From everyday meals to grand celebrations, discover the offerings that make Setho Kitchen special.</p>
          </div>
          <div className="offerings">
            {offerings.map((o) => (
              <article key={o.title} className="offering">
                <div className="offering__img">
                  <img src={o.img} alt={o.title} />
                </div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <Link to="/menu" className="btn btn--ghost">View details →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Planning an event?</h2>
            <p>Let us handle the food so you can enjoy the moment. Request a personalised catering quote today.</p>
          </div>
          <Link to="/contact" className="btn btn--accent">Request a Catering Quote</Link>
        </div>
      </section>
    </>
  )
}