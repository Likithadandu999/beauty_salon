import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
    const services = [
    {
      id: 1,
      title: "Hair Care",
      description:
        "Haircuts, styling, coloring and professional hair treatments."
    },
    {
      id: 2,
      title: "Skin Care",
      description:
        "Facial treatments and skincare services for healthy glowing skin."
    },
    {
      id: 3,
      title: "Bridal Makeup",
      description:
        "Professional makeup services for weddings and special occasions."
    },
    {
      id: 4,
      title: "Manicure & Pedicure",
      description:
        "Relaxing nail care services for beautiful hands and feet."
    },
    {
      id: 5,
      title: "Hair Spa",
      description:
        "Nourishing hair spa treatments for healthy and shiny hair."
    },
    {
      id: 6,
      title: "Party Makeup",
      description:
        "Beautiful makeup looks for parties and special events."
    }
  ];
  return (
   <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">
            Our Services
          </h1>

          <p className="text-muted">
            Professional beauty services for every occasion.
          </p>
        </div>

        <div className="row">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>
    </section>
  )
}

export default Services