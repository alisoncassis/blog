import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me on{' '}
      <a href="https://instagram.com/alison.cassis/">Instagram</a>
      {' '},{' '}
      <a href="https://linkedin.com/in/alisoncassis">LinkedIn</a>
      {' '}and{' '}
      <a href="https://medium.com/@alisoncassis">Medium</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="#">Agência Millennials</a>.
        </span>
      </div>
    </footer>
  </div>
)
