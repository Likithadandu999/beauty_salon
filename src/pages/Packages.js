import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPackage } from "../redux/bookingSlice";

const Packages = () => {
    const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Unable to load packages");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-danger">{error}</h4>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Beauty Packages</h1>

<p className="text-muted">
  Choose the perfect package for your beauty needs.
</p>
        </div>

        <div className="row g-4">

          {products.map((product) => (
            <div
              className="col-sm-6 col-lg-4"
              key={product.id}
            >
              <div className="card package-card h-100 shadow-sm">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h5 className="fw-bold">
  {product.title}
</h5>

<p className="text-muted">
  {product.description}
</p>

<div className="d-flex justify-content-between align-items-center mt-3">
  <h5 className="fw-bold mb-0">
    ₹{product.price}
  </h5>

 <Link to="/contact" className="btn btn-dark" onClick={() => dispatch(selectPackage(product))}>
  Book Now
</Link>
</div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Packages;