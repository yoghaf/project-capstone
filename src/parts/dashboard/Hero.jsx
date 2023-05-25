import React from "react";

function Hero() {
  return (
    <section>
      <div className="position-relative">
        <img className="img-fluid" src="./images/content/pexels-emmet-128421.jpg" alt="tes" />

        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="text-white display-3 fw-medium">Mulai Gerakan Peduli Lingkungan untuk Bumi yang Lebih Baik</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
