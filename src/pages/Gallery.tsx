import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import platterImg from '../assets/platter.jpg'
import traditionalImg from '../assets/traditional.jpg'
import dessertImg from '../assets/dessert.jpg'
import heroImg from '../assets/hero.jpg'
import './Gallery.css'

const images = [
  { src: heroImg, alt: 'Beautifully presented catering platter' },
  { src: platterImg, alt: 'Colourful party platter' },
  { src: traditionalImg, alt: 'Traditional Botswana-inspired dish' },
  { src: dessertImg, alt: 'Dessert selection' },
  { src: gallery1, alt: 'Buffet presentation' },
  { src: gallery2, alt: 'Fresh ingredients' },
  { src: gallery3, alt: 'Sweet treats' },
  { src: gallery4, alt: 'Baked goods' },
  { src: gallery5, alt: 'Dessert display' },
  { src: gallery6, alt: 'Event catering setup' },
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <h1>A taste of Setho Kitchen</h1>
          <p className="page-hero__lead">
            A glimpse of our platters, traditional dishes, buffet presentations, desserts and event setups.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container gallery-grid">
          {images.map((img, i) => (
            <figure key={i} className="gallery-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}