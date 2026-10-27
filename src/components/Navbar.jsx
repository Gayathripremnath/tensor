import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand.jsx'
import './Navbar.css'

const sectionLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={`primary-nav${menuOpen ? ' primary-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a
            className="primary-nav__link primary-nav__link--active"
            href="#home"
            aria-current="page"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          {sectionLinks.map((link) => (
            <a
              className="primary-nav__link"
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="button button--primary header-quote"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Get a quote <ArrowUpRight size={15} strokeWidth={2} />
        </a>
      </div>
    </header>
  )
}

export default Navbar
