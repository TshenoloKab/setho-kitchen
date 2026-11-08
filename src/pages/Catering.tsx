import { Link } from 'react-router-dom'
import corporateImg from '../assets/corporate.jpg'
import platterImg from '../assets/platter.jpg'
import dessertImg from '../assets/dessert.jpg'
import './Catering.css'

const events = [
  { title: 'Birthday Celebrations', desc: 'Fun, colourful menus for all ages, from kids parties to milestone birthdays.' },
  { title: 'Weddings & Family Gatherings', desc: 'Generous, elegant spreads for your most special day.' },
  { title: 'Baby Showers & Bridal Showers', desc: 'Light bites, platters and sweet treats for intimate celebrations.' },
  { title: 'Corporate Meetings & Office Events', desc: 'Professional catering for meetings, launches and workshops.' },
  { title: 'Private Celebrations', desc: 'Tailored menus for any private occasion at home or a venue.' },
]

export default function Catering() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Catering &amp; Events</span>
          <h1>Catering for every celebration</h1>
          <p className="page-hero__lead">
            From intimate gatherings to large corporate events, Setho Kitchen brings people together through
            thoughtfully prepared food.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container catering-grid">
          <div className="catering-grid__img">
            <img src={corporateImg} alt="Corporate catering buffet setup" />
          </div>
          <div>
            <span className="eyebrow">How It Works</span>
            <h2>Simple, stress-free catering</h2>
            <ol className="steps">
              <li><strong>Tell us about your event.</strong> Share the date, number of guests and your preferences.</li>
              <li><strong>Receive a tailored quote.</strong> We propose a menu and pricing suited to your occasion.</li>
              <li><strong>Confirm and relax.</strong> We handle the food so you can enjoy the moment.</li>
            </ol>
            <Link to="/contact" className="btn btn--primary">Request a Catering Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Events We Cater</span>
            <h2>Occasions we love</h2>
          </div>
          <div className="events">
            {events.map((e) => (
              <div key={e.title} className="event">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container catering-showcase">
          <img src={platterImg} alt="Beautifully arranged platter" />
          <img src={dessertImg} alt="Dessert selection" />
        </div>
        <div className="container" style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="https://wa.me/267XXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
            WhatsApp Your Enquiry
          </a>
        </div>
      </section>
    </>
  )
}