import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h5>Tentang Kami</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo diam non nunc feugiat, et fermentum dui consectetur.</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>Link Terkait</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">Beranda</Link>
                </li>
                <li>
                  <Link to="#">Tentang Kami</Link>
                </li>
                <li>
                  <Link to="#">Layanan</Link>
                </li>
                <li>
                  <Link to="#">Kontak</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>Kontak Kami</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-map-marker"></i> 123 Jalan Contoh, Kota Contoh, Negara Contoh
                </li>
                <li>
                  <i className="fa fa-phone"></i> +1234567890
                </li>
                <li>
                  <i className="fa fa-envelope"></i> info@contoh.com
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p>&copy; 2023 Contoh. Hak Cipta Dilindungi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
