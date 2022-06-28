import Link from "next/link";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">SMALL TEXT</p>
      <h3>mid text</h3>
      <img src="" alt="headphones" className="hero-banner-image" />
      <div>
        <Link href="/product/ID">
          <button type="button">BUTTON TEXT</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;