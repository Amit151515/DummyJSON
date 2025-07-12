import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="nav">
        <div className="container">
            <div className="nav__box">
                <div className="nav__box-left">
                    <Link to='/' className="nav__box-left-title">DummyJSON</Link>
                </div>
                <div className="nav__box-right">
                <Link to='/' className="nav__box-right-link">Главная</Link>
                <Link to="/find" className="nav__box-right-link">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  className="nav__box-right-img"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="11" cy="11" r="8" />
  <line x1="21" y1="21" x2="16.65" y2="16.65" />
</svg>
</Link>

                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar