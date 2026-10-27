import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Check,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HardHat,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import './Home.css'

const photos = {
  hero: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=88',
  heroTwo: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=88',
  heroThree: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=88',
  about: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85',
  homes: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  commercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
  renovation: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  management: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
  projectOne: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
  projectTwo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
  projectThree: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
}

const heroSlides = [
  {
    image: photos.hero,
    caption: 'Contemporary architecture',
    eyebrow: 'Built on trust. Made to last.',
    heading: 'Building the future',
    emphasis: 'with precision.',
    description:
      'Delivering quality construction, innovative engineering, and lasting value.',
  },
  {
    image: photos.heroTwo,
    caption: 'Considered residential spaces',
    eyebrow: 'Thoughtful spaces · Built with care',
    heading: 'Spaces made for',
    emphasis: 'living well.',
    description:
      'Thoughtful homes, built around the way you live. From first foundation to final finish.',
  },
  {
    image: photos.heroThree,
    caption: 'Modern commercial design',
    eyebrow: 'Clear vision · Precise delivery',
    heading: 'Building with',
    emphasis: 'purpose.',
    description:
      'Purpose-built spaces shaped by careful planning, skilled work, and clear communication.',
  },
]

const stats = [
  { value: 15, suffix: '+', label: 'Years of experience' },
  { value: 120, suffix: '+', label: 'Projects completed' },
  { value: 80, suffix: '+', label: 'Happy clients' },
  { value: 25, suffix: '+', label: 'Expert professionals' },
]

const services = [
  {
    number: '01',
    icon: Building2,
    title: 'Residential construction',
    description:
      'Thoughtful homes, built around the way you live. From first foundation to final finish.',
    image: photos.homes,
  },
  {
    number: '02',
    icon: HardHat,
    title: 'Commercial construction',
    description:
      'High-performing spaces that bring your business vision to life—on time and on budget.',
    image: photos.commercial,
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Renovation & remodeling',
    description:
      'A fresh perspective on existing spaces, with meticulous care for every detail.',
    image: photos.renovation,
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Project management',
    description:
      'Clear communication, considered planning, and confident delivery at every stage.',
    image: photos.management,
  },
]

const projects = [
  {
    title: 'The Linden Residence',
    category: 'RESIDENTIAL · NEW BUILD',
    location: 'Westlake, Austin, TX',
    image: photos.projectOne,
    className: 'project-card--wide',
  },
  {
    title: 'Foundry House',
    category: 'COMMERCIAL · WORKPLACE',
    location: 'East Side, Austin, TX',
    image: photos.projectTwo,
    className: '',
  },
  {
    title: 'Casa Sol',
    category: 'RESIDENTIAL · RENOVATION',
    location: 'Barton Hills, Austin, TX',
    image: photos.projectThree,
    className: '',
  },
]

const reasons = [
  {
    icon: Award,
    title: 'Craftsmanship without compromise',
    text: 'Thoughtful detailing and quality materials, built to stand the test of time.',
  },
  {
    icon: UsersRound,
    title: 'People who know their craft',
    text: 'An experienced, hands-on team that takes ownership from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety at every step',
    text: 'Careful planning and rigorous standards protect the people and places we build.',
  },
  {
    icon: Clock3,
    title: 'Clear plans. Reliable delivery.',
    text: 'Straightforward communication and accountable timelines, all the way through.',
  },
]

function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) {
          setCount(value)
          return
        }

        const start = performance.now()
        const duration = 1300
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setCount(Math.round(value * eased))
          if (progress < 1) window.requestAnimationFrame(animate)
        }
        window.requestAnimationFrame(animate)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value">
        {count}
        <span>{suffix}</span>
      </div>
      <p>{label}</p>
    </div>
  )
}

function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow${light ? ' eyebrow--light' : ''}`}>
      <span className="eyebrow__line" />
      <span>{children}</span>
    </div>
  )
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4000)

    return () => window.clearInterval(timer)
  }, [isPaused, prefersReducedMotion])

  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length)
  }

  return (
    <section
      className="hero"
      id="home"
      aria-roledescription="carousel"
      aria-label="Tensor architecture highlights"
    >
      <div className="hero__visual" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            className={`hero__image${index === activeSlide ? ' hero__image--active' : ''}`}
            src={slide.image}
            alt=""
            key={slide.image}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="hero__inner page-wrap">
        <div className="hero__content" key={activeSlide} aria-live="polite" aria-atomic="true">
          <Eyebrow>{heroSlides[activeSlide].eyebrow}</Eyebrow>
          <h1>
            {heroSlides[activeSlide].heading}
            <br />
            <span>{heroSlides[activeSlide].emphasis}</span>
          </h1>
          <p>{heroSlides[activeSlide].description}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore our projects <ArrowRight size={16} />
            </a>
            <a className="button button--outline-dark" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <p className="hero__photo-label" aria-live="polite">
          {heroSlides[activeSlide].caption}
        </p>
        <a className="hero__scroll" href="#highlights" aria-label="Scroll to company highlights">
          <span>Scroll to discover</span>
          <ArrowDown size={15} />
        </a>
        <div className="hero__controls" aria-label="Hero slideshow controls">
          <button
            className="hero__control hero__control--play"
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={
              prefersReducedMotion
                ? 'Automatic slideshow disabled by reduced-motion preference'
                : isPaused
                  ? 'Play slideshow'
                  : 'Pause slideshow'
            }
            disabled={prefersReducedMotion}
          >
            {isPaused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          </button>
          <button
            className="hero__control"
            type="button"
            onClick={() => showSlide(activeSlide - 1)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={17} aria-hidden="true" />
          </button>
          <span className="hero__index" aria-hidden="true">
            <span>{String(activeSlide + 1).padStart(2, '0')}</span> / {String(heroSlides.length).padStart(2, '0')}
          </span>
          <button
            className="hero__control"
            type="button"
            onClick={() => showSlide(activeSlide + 1)}
            aria-label="Next slide"
          >
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  return (
    <section className="highlights" id="highlights" aria-label="Tensor at a glance">
      <div className="highlights__inner page-wrap">
        <div className="highlights__intro">
          <Eyebrow>Our track record</Eyebrow>
          <p>Experience you can build on.</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
      <p className="demo-note">Illustrative demo figures · Replace with verified company data</p>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-layout page-wrap">
        <div className="about-visual">
          <img
            src={photos.about}
            alt="Construction professionals at work on a modern building"
            loading="lazy"
          />
          <div className="about-badge">
            <span className="about-badge__number">15</span>
            <span>years of<br />building trust</span>
          </div>
          <div className="about-caption">
            <span>BUILT WITH INTENTION</span>
            <span>01 — 03</span>
          </div>
        </div>
        <div className="about-copy">
          <Eyebrow>Who we are</Eyebrow>
          <h2>Building trust.<br />Creating <span>landmarks.</span></h2>
          <p className="about-copy__lead">
            Better buildings begin with better partnerships.
          </p>
          <p className="body-copy">
            At Tensor, we bring people, craft, and clear thinking together to build places
            that make a difference. From the first conversation to the finishing details,
            we’re committed to quality, safety, and getting every project over the line
            exactly as promised.
          </p>
          <div className="about-values">
            <span><Check size={14} /> Quality without compromise</span>
            <span><Check size={14} /> Safety in every decision</span>
            <span><Check size={14} /> Delivery you can depend on</span>
          </div>
          <a className="text-link" href="#services">
            Discover more <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="page-wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2>Built around <span>your vision.</span></h2>
          </div>
          <p>From a single room to an entire development, we bring the right people and the right plan to every build.</p>
        </div>
        <div className="services-grid">
          {services.map(({ number, icon: Icon, title, description, image }) => (
            <a className="service-card" href="#contact" key={title}>
              <div className="service-card__image">
                <img src={image} alt="" loading="lazy" />
                <span className="service-card__number">{number}</span>
                <span className="service-card__icon"><Icon size={20} strokeWidth={1.7} /></span>
              </div>
              <div className="service-card__copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-card__link">Explore service <ArrowUpRight size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-wrap">
        <div className="section-heading section-heading--projects">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2>Made to <span>make a mark.</span></h2>
          </div>
          <a className="button button--outline-dark" href="#projects">
            View all projects <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map(({ title, category, location, image, className }) => (
            <a className={`project-card ${className}`} href="#contact" key={title}>
              <div className="project-card__image">
                <img src={image} alt={`${title} — ${category.toLowerCase()} project`} loading="lazy" />
                <span className="project-card__arrow"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-card__meta">
                <div>
                  <span className="project-card__category">{category}</span>
                  <h3>{title}</h3>
                </div>
                <span className="project-card__location">{location}</span>
              </div>
            </a>
          ))}
        </div>
        <p className="projects-note">Project names and locations shown for demonstration purposes.</p>
      </div>
    </section>
  )
}

function WhyTensor() {
  return (
    <section className="section why-section">
      <div className="why-layout page-wrap">
        <div className="why-intro">
          <Eyebrow>Why Tensor</Eyebrow>
          <h2>A better build<br />starts <span>with us.</span></h2>
          <p>Good work is about more than what gets built. It’s how you feel throughout the process.</p>
          <a className="text-link" href="#contact">
            Meet your building partner <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="reasons-grid">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <article className="reason" key={title}>
              <span className="reason__number">0{index + 1}</span>
              <span className="reason__icon"><Icon size={20} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__inner page-wrap">
        <div>
          <Eyebrow light>Have a project in mind?</Eyebrow>
          <h2>Let’s build something<br /><span>great together.</span></h2>
          <p>Tell us what you’re imagining. We’ll bring the experience, the care, and a clear plan to make it real.</p>
        </div>
        <a className="button button--primary cta-button" href="mailto:hello@tensorconstruction.com?subject=Let%27s%20build%20something%20great">
          Start your project <ArrowUpRight size={17} />
        </a>
        <span className="cta-section__watermark" aria-hidden="true">T</span>
      </div>
    </section>
  )
}

function Home() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const sections = document.querySelectorAll('main > section:not(.hero)')
    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('scroll-reveal--visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    sections.forEach((section) => {
      section.classList.add('scroll-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main id="main-content">
      <Hero />
      <Highlights />
      <About />
      <Services />
      <Projects />
      <WhyTensor />
      <CallToAction />
    </main>
  )
}

export default Home
