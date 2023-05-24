import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <image src="../assets/images/pexels-emmet-128421.jpg" className="img-fluid" alt="Hero Image"></image>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <h1>Welcome to My Website</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo diam non nunc feugiat, et fermentum dui consectetur.</p>
              <Link href="#" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
