import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutUs.css";
import SDlogo from "../../assets/sdlogo.webp";
import AboutUsImage from "../../assets/aboutus.webp";

const AboutUs = () => {
  const { t, i18n } = useTranslation("global");

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src={SDlogo} alt="Логотип" />
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">{t('home.message')}</Link></li>
              <li><Link to="/about-us">{t('home.aboutUs')}</Link></li>
              <li><Link to="/rules">{t('home.rules')}</Link></li>
              <li><Link to="/filial">{t('home.filial')}</Link></li>
              <li><Link to="/news">{t('home.news')}</Link></li>
              <li><Link to="/sponsors">{t('home.sponsors')}</Link></li>
            </ul>
          </nav>
          <div className="language-selector">
            <ul>
              <li><button onClick={() => handleLanguageChange("ru")}>RU</button></li>
              <li><button onClick={() => handleLanguageChange("kz")}>KZ</button></li>
            </ul>
          </div>
        </div>
      </header>

      <section>
        <div className="aim">
          <h1>{t('aboutUs.title')}</h1>
        </div>
        <img src={AboutUsImage} className="aboutus" alt="error" />
      </section>

      <section className="layout-section">
        <div className="horizontal-block">
          <h2>{t('aboutUs.goals.title')}</h2>
          <p>{t('aboutUs.goals.content')}</p>
        </div>

        <div className="vertical-blocks">
          <div className="vertical-block">
            <h3>{t('aboutUs.showdown.title')}</h3>
            <p>{t('aboutUs.showdown.content')}</p>
          </div>
          <div className="vertical-block">
            <h3>{t('aboutUs.history.title')}</h3>
            <p>{t('aboutUs.history.content')}</p>
          </div>
        </div>

        <div className="horizontal-block">
          <h2>{t('aboutUs.tableTennisForBlind.title')}</h2>
          <p>{t('aboutUs.tableTennisForBlind.content')}</p>
        </div>

        <div className="horizontal-block">
          <h2>{t('aboutUs.events.title')}</h2>
          <p>{t('aboutUs.events.content')}</p>
        </div>
      </section>

      <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
          <div style={{ flex: '1 1 300px', margin: '20px' }}>
            <h3>{t('contact.title')}</h3>
            <p>{t('contact.address')}</p>
            <p>
              Телефон:{' '}
              <a href="tel:+77029113002" style={{ color: '#4caf50' }}>
                {t('contact.phone')}
              </a>
            </p>
          </div>

          <div style={{ flex: '1 1 300px', margin: '20px' }}>
            <h3>Мы в социальных сетях:</h3>
            <a
              href="https://www.instagram.com/serikzhuzbai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#4caf50',
                  borderRadius: '50%',
                  textAlign: 'center',
                  lineHeight: '30px',
                  color: '#fff',
                  marginRight: '10px',
                  fontSize: '1.2rem',
                }}
              >
                I
              </span>
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
