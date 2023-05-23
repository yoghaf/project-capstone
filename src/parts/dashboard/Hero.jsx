import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div className="relative">
        <img className="object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1042&q=80" alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-6xl text-center">Mulai Gerakan Peduli Lingkungan untuk Bumi yang Lebih Baik</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
