import Link from 'next/link'
import React from 'react'


export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-secondary pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">

            {/* Brand Info */}
            <div className="col-md-4 mb-4">
              <h4 className="text-white">Quick BUY</h4>
              <p>
                Your trusted e-commerce partner for daily essentials, gadgets, fashion, and more.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-secondary fs-5">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-secondary fs-5">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-secondary fs-5">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-secondary fs-5">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link href="/products" className="text-secondary text-decoration-none">Products</Link></li>
                <li><Link href="/about" className="text-secondary text-decoration-none">About Us</Link></li>
                <li><Link href="/contact" className="text-secondary text-decoration-none">Contact</Link></li>
                <li><Link href="/cart" className="text-secondary text-decoration-none">Cart</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 mb-4 text-secondary">
              <h5>Contact Us</h5>
              <p>Email: support@guickbuy.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Location: Mumbai, India</p>
            </div>
          </div>

          <hr className="border-top border-light" />
          <p className="text-center mb-0 small">
          <strong>QuickBUY</strong>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
