const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
  ];

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-uppercase text-muted fw-bold">
            Our Gallery
          </p>

          <h1 className="fw-bold">
            Explore Our Work
          </h1>

          <p className="text-muted">
            Take a look at some of our beauty and salon work.
          </p>
        </div>

        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="gallery-card shadow-sm">

                <img
                  src={image}
                  alt={`Salon work ${index + 1}`}
                  className="img-fluid"
                />

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;