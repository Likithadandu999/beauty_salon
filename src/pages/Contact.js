import React, { useState } from "react";
import { useSelector } from "react-redux";

const Contact = () => {
    const selectedPackage = useSelector(
  (state) => state.booking.selectedPackage
);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
     let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!formData.service) {
    newErrors.service = "Please select a service";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    const appointment = {
      ...formData,
      package: selectedPackage?.title || "",
      price: selectedPackage?.price || null,
      createdAt: new Date().toISOString(),
      status: "Requested",
    };
    const appointments = JSON.parse(localStorage.getItem("glowAppointments") || "[]");
    localStorage.setItem("glowAppointments", JSON.stringify([appointment, ...appointments]));
    localStorage.setItem("glowProfile", JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    }));

    alert("Appointment booked successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setErrors({});
  }
};

  return (
  <section className="py-5 contact-section">
    <div className="container">

      <div className="text-center mb-5">
        <p className="text-uppercase text-muted fw-bold">
          Contact Us
        </p>

        <h1 className="fw-bold">
          Book Your Appointment
        </h1>

        <p className="text-muted">
          Fill in the form and we'll get back to you shortly.
        </p>
      </div>

      <div className="row g-4">

        {/* Contact Information */}
        <div className="col-lg-5">
          <div className="contact-info h-100 shadow-sm p-4">

            <h3 className="fw-bold mb-4">
              Get In Touch
            </h3>

            <p className="text-muted">
              We are happy to help you choose the right beauty
              service for your needs.
            </p>

            <div className="mt-4">
              <h6 className="fw-bold">📍 Address</h6>
              <p className="text-muted">
                Bangalore, Karnataka
              </p>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold">📞 Phone</h6>
              <p className="text-muted">
                +91 98765 43210
              </p>
            </div>

            <div className="mt-4">
              <h6 className="fw-bold">✉️ Email</h6>
              <p className="text-muted">
                info@glowbeautysalon.com
              </p>
            </div>

          </div>
        </div>

        {/* Appointment Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4">

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                {selectedPackage && (
  <div className="alert alert-light border mb-4">
    <h5 className="fw-bold mb-1">
      Selected Package
    </h5>

    <p className="mb-1">
      {selectedPackage.title}
    </p>

    <strong>
      ₹{selectedPackage.price}
    </strong>
  </div>
)}
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                />

                {errors.name && (
                  <small className="text-danger">
                    {errors.name}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />

                {errors.email && (
                  <small className="text-danger">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter 10 digit phone number"
                />

                {errors.phone && (
                  <small className="text-danger">
                    {errors.phone}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Select Service
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">
                    Choose a service
                  </option>
                  <option value="Hair Care">
                    Hair Care
                  </option>
                  <option value="Skin Care">
                    Skin Care
                  </option>
                  <option value="Bridal Makeup">
                    Bridal Makeup
                  </option>
                  <option value="Manicure & Pedicure">
                    Manicure & Pedicure
                  </option>
                  <option value="Hair Spa">
                    Hair Spa
                  </option>
                  <option value="Party Makeup">
                    Party Makeup
                  </option>
                </select>

                {errors.service && (
                  <small className="text-danger">
                    {errors.service}
                  </small>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  rows="4"
                  placeholder="Tell us what you need..."
                />

                {errors.message && (
                  <small className="text-danger">
                    {errors.message}
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-dark w-100"
              >
                Book Appointment
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  </section>
);
};

export default Contact;