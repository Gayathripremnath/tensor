import { NavLink } from 'react-router-dom'
import './Brand.css'

function Brand({ light = false }) {
  return (
    <NavLink
      className={`brand${light ? ' brand--light' : ''}`}
      to="/"
      aria-label="Tensor Construction home"
    >
      <img className="brand__logo" src="/tensor-logo-on-dark.svg" alt="" />
    </NavLink>
  )
}

export default Brand
