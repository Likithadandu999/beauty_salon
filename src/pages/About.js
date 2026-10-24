const About = () => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted fw-bold">
            About Us
          </p>

          <h1 className="fw-bold">
            Beauty, Care & Confidence
          </h1>

          <p className="text-muted">
            We believe every person deserves to feel beautiful and confident.
          </p>
        </div>

        {/* About Content */}
        <div className="row align-items-center">

          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
              alt="Beauty salon"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">
              Welcome to Glow Beauty Salon
            </h2>

            <p className="text-muted">
              Glow Beauty Salon is a modern beauty salon offering
              professional hair, skin, makeup and beauty services.
            </p>

            <p className="text-muted">
              Our experienced professionals focus on providing
              personalized services in a comfortable and friendly
              environment.
            </p>

            <div className="row mt-4">

              <div className="col-6 mb-3">
                <h4 className="fw-bold">5+</h4>
                <p className="text-muted">Years Experience</p>
              </div>

              <div className="col-6 mb-3">
                <h4 className="fw-bold">1000+</h4>
                <p className="text-muted">Happy Clients</p>
              </div>

              <div className="col-6">
                <h4 className="fw-bold">20+</h4>
                <p className="text-muted">Beauty Services</p>
              </div>

              <div className="col-6">
                <h4 className="fw-bold">100%</h4>
                <p className="text-muted">Customer Care</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;