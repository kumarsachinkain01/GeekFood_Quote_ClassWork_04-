import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <h1 className="footer__logo">logoipsum</h1>
          <p className="footer__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__link">About</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">Careers</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">History</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">Services</a>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__link">Projects</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__link">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer