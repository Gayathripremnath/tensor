import { BriefcaseBusiness, Camera, ChevronDown } from 'lucide-react'
import Brand from './Brand.jsx'
import './Footer.css'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Specialization', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Client stories', href: '#client-stories' },
  { label: 'News & articles', href: '#articles' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main page-wrap">
        <div className="footer-brand">
          <Brand light />
          <p>
            Building with purpose, integrity, and an eye on what’s next. Let’s create
            something that lasts.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <BriefcaseBusiness size={17} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <Camera size={17} />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
          <a href="#contact">Start a project</a>
        </div>
        <div className="footer-column footer-contact">
          <h2>Say hello</h2>
          <a href="mailto:hello@tensorconstruction.com">hello@tensorconstruction.com</a>
          <a href="tel:+15125550184">+1 (512) 555-0184</a>
          <span>Austin, Texas · Serving the greater Austin area</span>
        </div>
        <a className="back-to-top" href="#home" aria-label="Back to top">
          <ChevronDown size={17} />
        </a>
      </div>
      <div className="footer-bottom">
        <div className="page-wrap footer-bottom__inner">
                 </div>
      </div>
    </footer>
  )
}

export default Footer
