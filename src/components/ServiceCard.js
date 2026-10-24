const ServiceCard = ({ title, description }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card service-card h-100 shadow-sm">

        <div className="card-body text-center p-4">

          <div className="service-icon mb-3">
            ✨
          </div>

          <h4 className="fw-bold">
            {title}
          </h4>

          <p className="text-muted">
            {description}
          </p>

          <button className="btn btn-outline-dark">
            Learn More
          </button>

        </div>

      </div>
    </div>
  );
};

export default ServiceCard;