import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-4">
            <h4>Glow Beauty Salon</h4>

            <p className="text-light">
              Professional beauty, hair and skincare services
              designed to help you look and feel your best.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none"
                >
                  Services
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>

            <p className="mb-2">
              📍 Bangalore, India
            </p>

            <p className="mb-2">
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ glowbeautysalon@example.com
            </p>
          </div>

        </div>

        <hr />

        <div className="text-center">
          <p className="mb-0">
            © 2026 Glow Beauty Salon. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;