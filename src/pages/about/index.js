import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">About Us</h2>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <Image
            src="/assets/images/aboutus.webp"
            alt="About Us"
            width={400}
            height={400}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <p className="lead">
            Welcome to <strong>MyShop</strong>! We are committed to bringing you
            the best products at unbeatable prices. From electronics to fashion
            and daily essentials, our platform is designed to make shopping
            easy, fun, and reliable.
          </p>
          <p>
            Our mission is to provide quality products, fast delivery, and
            exceptional customer service. We believe in trust, transparency,
            and building lasting relationships with our customers.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>Why Choose Us?</h4>
        <ul className="list-unstyled mt-3">
          <li>✅ Wide range of products</li>
          <li>✅ Affordable prices and great deals</li>
          <li>✅ Easy returns and secure payments</li>
          <li>✅ 24/7 customer support</li>
        </ul>
      </div>
    </div>
  );
}
