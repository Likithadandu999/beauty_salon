import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="hero-section py-5">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1 className="hero-title">
                Look Beautiful.
                <br />
                Feel Confident.
              </h1>

             <p className="hero-text mt-3">
                Welcome to Glow Beauty Salon. We provide professional
                beauty and hair care services to help you look and feel
                your best.
              </p>

              <button className="btn btn-dark btn-lg mt-3">
                Book Appointment
              </button>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
    src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
    alt="Beauty Salon"
    className="img-fluid rounded shadow"
  />
            </div>

          </div>
        </div>
      </section> */}
      <section className="hero-section py-5">
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-6 mb-4 mb-lg-0">
        <p className="text-uppercase text-muted fw-bold">
          Welcome to Glow Beauty Salon
        </p>

        <h1 className="hero-title">
          Look Elegant.
          <br />
          Feel Confident.
        </h1>

        <p className="hero-text">
          Professional beauty and salon services designed to make
          you look and feel your best.
        </p>

        <div className="mt-4">
         <Link to="/contact" className="btn btn-dark me-3">
  Book Appointment
</Link>

<Link to="/services" className="btn btn-outline-dark">
  Our Services
</Link>
        </div>
      </div>

      <div className="col-lg-6">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
          alt="Beauty Salon"
          className="img-fluid rounded-4 shadow"
        />
      </div>

    </div>
  </div>
</section>

      {/* Services Introduction */}
      {/* <section className="py-5">
        <div className="container text-center">

          <h2 className="fw-bold">
            Our Services
          </h2>

          <p className="text-muted">
            Everything you need for your beauty and wellness.
          </p>

          <div className="row mt-4">

            <div className="col-md-4 mb-3">
             <div className="card service-card h-100 shadow-sm">
                <div className="card-body">
                  <h4>Hair Care</h4>
                  <p>
                    Haircuts, styling, coloring and professional
                    hair treatments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body">
                  <h4>Skin Care</h4>
                  <p>
                    Facial treatments and skincare services for
                    healthy glowing skin.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card service-card h-100 shadow-sm">
                <div className="card-body">
                  <h4>Bridal Makeup</h4>
                  <p>
                    Professional makeup services for weddings
                    and special occasions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;