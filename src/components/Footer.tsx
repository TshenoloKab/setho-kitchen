import { Link } from 'react-router-dom'
import './Footer.css'

const WHATSAPP_PLACEHOLDER = '267XXXXXXXX' // Replace with real WhatsApp number (Botswana format: 267XXXXXXXX)
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_PLACEHOLDER}?text=${encodeURIComponent('Hello Setho Kitchen, I would like to enquire about catering.')}`
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__mark">SK</span>
            <span className="footer__name">Setho Kitchen</span>
          </div>
          <p className="footer__desc">
            Thoughtfully prepared food and memorable catering experiences.
            Good food, beautifully made.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp footer__wa">
            WhatsApp Us
          </a>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/catering">Catering &amp; Events</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <p>Phone: [Placeholder phone number]</p>
          <p>Email: hello@sethokitchen.co.bw (placeholder)</p>
          <p className="footer__note">WhatsApp: +267 XX XXX XXXX (placeholder)</p>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook (placeholder)</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram (placeholder)</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok (placeholder)</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {CURRENT_YEAR} Setho Kitchen. All rights reserved.</p>
        <p className="footer__credit">Website by Traxena Digital</p>
      </div>
    </footer>
  )
}