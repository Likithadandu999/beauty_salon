import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const emptyProfile = { name: "", email: "", phone: "" };

const readStoredValue = (key, fallback) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch {
    return fallback;
  }
};

const Profile = () => {
  const [profile, setProfile] = useState(() => ({
    ...emptyProfile,
    ...readStoredValue("glowProfile", {}),
  }));
  const [appointments, setAppointments] = useState(() =>
    readStoredValue("glowAppointments", [])
  );
  const [activeSection, setActiveSection] = useState("overview");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const syncProfile = () => {
      setProfile({ ...emptyProfile, ...readStoredValue("glowProfile", {}) });
      setAppointments(readStoredValue("glowAppointments", []));
    };
    window.addEventListener("storage", syncProfile);
    return () => window.removeEventListener("storage", syncProfile);
  }, []);

  const updateField = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
    setSaved(false);
  };

  const saveProfile = (event) => {
    event.preventDefault();
    localStorage.setItem("glowProfile", JSON.stringify(profile));
    setSaved(true);
  };

  const displayName = profile.name.trim() || "Glow Member";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const menuItems = [
    { id: "overview", icon: "⌂", label: "Overview" },
    { id: "details", icon: "♙", label: "Personal details" },
  ];

  return (
    <main className="profile-page py-4 py-md-5">
      <div className="container">
        <div className="profile-cover" role="img" aria-label="Beauty portrait background" />

        <div className="d-flex flex-column flex-sm-row align-items-sm-end gap-3 px-3 px-md-4 mb-4 profile-heading">
          <div className="profile-avatar" aria-label={`${displayName} initials`}>
            {initials || "G"}
          </div>
          <div className="pb-sm-2 flex-grow-1">
            <p className="text-uppercase small fw-bold mb-1" style={{ color: "#9b5369", letterSpacing: "1.5px" }}>
              Glow Beauty Salon · Member
            </p>
            <h1 className="h2 fw-bold mb-1">{displayName}</h1>
            <p className="text-muted mb-0">Your beauty journey, all in one place.</p>
          </div>
          <button
            type="button"
            className="btn profile-primary-button px-4 mb-sm-2"
            onClick={() => setActiveSection("details")}
          >
            Edit profile
          </button>
        </div>

        <div className="row g-4">
          <aside className="col-lg-3">
            <div className="profile-panel p-3">
              <p className="small text-uppercase fw-bold text-muted px-2 mb-2">My account</p>
              <nav className="d-grid gap-1" aria-label="Profile sections">
                {menuItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`profile-menu-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={() => setActiveSection(item.id)}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    <span className="fs-5" aria-hidden="true">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
              <hr className="my-3" />
              <Link className="profile-menu-link text-decoration-none" to="/contact">
                <span className="fs-5" aria-hidden="true">＋</span> Book an appointment
              </Link>
            </div>
          </aside>

          <section className="col-lg-9" aria-live="polite">
            {activeSection === "overview" ? (
              <>
                <div className="row g-3 mb-4">
                  <div className="col-sm-6 col-xl-4">
                    <div className="profile-stat h-100 d-flex align-items-center gap-3">
                      <span className="profile-stat-icon" aria-hidden="true">✦</span>
                      <div>
                        <p className="small text-muted mb-1">Appointments</p>
                        <p className="h4 fw-bold mb-0">{appointments.length}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="profile-stat h-100 d-flex align-items-center gap-3">
                      <span className="profile-stat-icon" aria-hidden="true">♡</span>
                      <div>
                        <p className="small text-muted mb-1">Member status</p>
                        <p className="h5 fw-bold mb-0">Beauty lover</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xl-4">
                    <div className="profile-stat h-100 d-flex align-items-center gap-3">
                      <span className="profile-stat-icon" aria-hidden="true">☼</span>
                      <div>
                        <p className="small text-muted mb-1">Next visit</p>
                        <p className="h5 fw-bold mb-0">{appointments.length ? "Requested" : "Not booked"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-panel p-4 p-md-5">
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
                    <div>
                      <p className="small text-uppercase fw-bold mb-1" style={{ color: "#9b5369", letterSpacing: "1px" }}>Your schedule</p>
                      <h2 className="h4 fw-bold mb-0">Appointments</h2>
                    </div>
                    <Link to="/contact" className="btn profile-primary-button px-3">Book a visit</Link>
                  </div>

                  {appointments.length ? (
                    <div className="d-grid gap-3">
                      {appointments.map((appointment, index) => (
                        <article className="border rounded-4 p-3 p-md-4" key={`${appointment.createdAt || "appointment"}-${index}`}>
                          <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                            <div>
                              <span className="badge rounded-pill mb-2" style={{ background: "#f8e8ed", color: "#87445b" }}>{appointment.status || "Requested"}</span>
                              <h3 className="h5 fw-bold mb-1">{appointment.service}</h3>
                              <p className="text-muted mb-1">{appointment.package || "Beauty service appointment"}</p>
                              <p className="small text-muted mb-0">{appointment.createdAt ? new Date(appointment.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" }) : "Date not available"}</p>
                            </div>
                            {appointment.price ? <strong className="text-nowrap">₹{appointment.price}</strong> : null}
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 py-md-5">
                      <div className="profile-stat-icon mx-auto mb-3" aria-hidden="true">✦</div>
                      <h3 className="h5 fw-bold">A little self-care is calling</h3>
                      <p className="text-muted mx-auto mb-4" style={{ maxWidth: "390px" }}>
                        Your appointment requests will appear here. Explore our services and plan a moment just for you.
                      </p>
                      <Link to="/services" className="btn profile-primary-button px-4">Explore services</Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="profile-panel p-4 p-md-5">
                <div className="mb-4">
                  <p className="small text-uppercase fw-bold mb-1" style={{ color: "#9b5369", letterSpacing: "1px" }}>Your account</p>
                  <h2 className="h4 fw-bold mb-1">Personal details</h2>
                  <p className="text-muted mb-0">Keep your contact information up to date.</p>
                </div>
                <form onSubmit={saveProfile}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" htmlFor="profile-name">Full name</label>
                      <input id="profile-name" className="form-control" name="name" value={profile.name} onChange={updateField} placeholder="Your full name" autoComplete="name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" htmlFor="profile-email">Email address</label>
                      <input id="profile-email" className="form-control" type="email" name="email" value={profile.email} onChange={updateField} placeholder="you@example.com" autoComplete="email" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold" htmlFor="profile-phone">Phone number</label>
                      <input id="profile-phone" className="form-control" type="tel" name="phone" value={profile.phone} onChange={updateField} placeholder="Your phone number" autoComplete="tel" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <button type="submit" className="btn profile-primary-button px-4">Save changes</button>
                    {saved && <span className="small text-success" role="status">Your profile has been saved.</span>}
                  </div>
                </form>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Profile;
