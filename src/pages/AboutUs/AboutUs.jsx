import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AboutUs.css";
import SDlogo from "../../assets/sdlogo.webp";
import AboutUsImage from "../../assets/aboutus.webp";
import SQlogo from "../../assets/sq_logo.png";

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
        <div className="footer-logo">
          <img src={SQlogo} alt = "missing photos"/>
          <p className="footer-text">
          &copy; При поддержке фонда <a href="https://sportqory.kz">Sport Qory</a>
          </p>
        </div>
        <section style={{ padding: '40px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px', color: '#fff' }}>
          {t('workingDays.title')}
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px',
          }}>
            <h3 style={{ textAlign: 'center', color: '#4caf50', fontSize: '1.8rem' }}>
              {t('workingDays.mondayToFriday')}
            </h3>
          </div>

          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '400px',
          }}>
            <h3 style={{ textAlign: 'center', color: '#4caf50', fontSize: '1.8rem' }}>
              {t('workingDays.weekend')}
            </h3>
          </div>
        </div>
      </section>
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
            <h3>Серик Жузбай:</h3>
            <a
              href="https://www.instagram.com/serikzhuzbai/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{
                  width: '30px',
                  height: '30px',
                  verticalAlign: 'middle',
                  marginRight: '10px',
                }}
              />
              Instagram
            </a>
          </div>
          <div style={{ flex: '1 1 300px', margin: '20px' }}>
            <h3>Шоудаун:</h3>
            <a
              href="https://www.instagram.com/showdown.kz?igsh=MWljczcxaWMzanoxdA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{
                  width: '30px',
                  height: '30px',
                  verticalAlign: 'middle',
                  marginRight: '10px',
                }}
              />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
