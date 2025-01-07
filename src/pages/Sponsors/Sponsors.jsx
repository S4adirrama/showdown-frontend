import React from "react";
import "./Sponsors.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SDlogo from "../../assets/sdlogo.webp";
import Sponsor1 from "../../assets/son1.avif";
import Sponsor2 from "../../assets/son2.avif";
import Sponsor3 from "../../assets/son3.avif";
import Sponsor4 from "../../assets/son4.avif";
import Sponsor5 from "../../assets/son5.avif";
import Sponsor6 from "../../assets/son6.avif";
import Sponsor7 from "../../assets/son7.avif";
import SQlogo from "../../assets/sq_logo.png";


const Sponsors = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={SDlogo} alt={t("header.logoAlt")} />
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">{t("home.message")}</Link></li>
              <li><Link to="/about-us">{t("home.aboutUs")}</Link></li>
              <li><Link to="/rules">{t("home.rules")}</Link></li>
              <li><Link to="/filial">{t("home.filial")}</Link></li>
              <li><Link to="/news">{t("home.news")}</Link></li>
              <li><Link to="/sponsors">{t("home.sponsors")}</Link></li>
            </ul>
          </nav>
          <div className="language-selector">
            <ul>
              <li>
                <button onClick={() => handleChangeLanguage("ru")}>RU</button>
              </li>
              <li>
                <button onClick={() => handleChangeLanguage("kz")}>KZ</button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main className="container-card">
        <div className="card">
          <div className="card-image">
            <img src={Sponsor1} alt={t("sponsors.sponsor1.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor1.title")}</h3>
            <p>{t("sponsors.sponsor1.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor2} alt={t("sponsors.sponsor2.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor2.title")}</h3>
            <p>{t("sponsors.sponsor2.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor3} alt={t("sponsors.sponsor3.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor3.title")}</h3>
            <p>{t("sponsors.sponsor3.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor4} alt={t("sponsors.sponsor4.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor4.title")}</h3>
            <p>{t("sponsors.sponsor4.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor5} alt={t("sponsors.sponsor5.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor5.title")}</h3>
            <p>{t("sponsors.sponsor5.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor6} alt={t("sponsors.sponsor6.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor6.title")}</h3>
            <p>{t("sponsors.sponsor6.description")}</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img src={Sponsor7} alt={t("sponsors.sponsor7.title")} />
          </div>
          <div className="card-content">
            <h3>{t("sponsors.sponsor7.title")}</h3>
            <p>{t("sponsors.sponsor7.description")}</p>
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: "#222", color: "#fff", padding: "20px", textAlign: "center" }}>
        <div className="footer-logo">
          <img src={SQlogo} alt = "missing photos"/>
          <p className="footer-text">
            &copy; При поддержке фонда <a href="https://sportqory.kz">Sport Qory</a>
          </p>
        </div>
        <section style={{ padding: "40px 0" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "30px", color: "#fff" }}>
            {t("workingDays.title")}
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "400px",
              }}
            >
              <h3 style={{ textAlign: "center", color: "#4caf50", fontSize: "1.8rem" }}>
                {t("workingDays.mondayToFriday")}
              </h3>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "400px",
              }}
            >
              <h3 style={{ textAlign: "center", color: "#4caf50", fontSize: "1.8rem" }}>
                {t("workingDays.weekend")}
              </h3>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Sponsors;
