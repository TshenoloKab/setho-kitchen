import { Link } from 'react-router-dom'
import { menuCategories } from '../data/menu'
import './Menu.css'

export default function Menu() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Menu</span>
          <h1>Food for every occasion</h1>
          <p className="page-hero__lead">
            Explore our catering categories. Menu items and prices are illustrative and can be customised to suit
            your event, guests and budget.
          </p>
        </div>
      </section>

      <nav className="menu-nav">
        <div className="container menu-nav__inner">
          {menuCategories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="menu-nav__link">
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="container">
          <div className="menu-list">
            {menuCategories.map((c) => (
              <article key={c.id} id={c.id} className="menu-cat">
                <div className="menu-cat__img">
                  <img src={c.image} alt={c.title} />
                </div>
                <div className="menu-cat__body">
                  <h2>{c.title}</h2>
                  <p className="menu-cat__desc">{c.description}</p>
                  <ul className="menu-cat__items">
                    {c.items.map((it) => (
                      <li key={it.name}>
                        <span className="menu-cat__name">{it.name}</span>
                        <span className="menu-cat__itemdesc">{it.description}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/267XXXXXXXX?text=${encodeURIComponent('Hello Setho Kitchen, I would like to enquire about ' + c.title + '.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Custom Menus</span>
          <h2>Need something specific?</h2>
          <p style={{ color: '#5a5752', maxWidth: 620, margin: '0 auto 24px' }}>
            We create custom menus tailored to your event, dietary needs and budget. Get in touch for a
            personalised quote.
          </p>
          <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
        </div>
      </section>
    </>
  )
}