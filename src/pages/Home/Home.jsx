import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import SDlogo from "../../assets/sdlogo.webp";
import DirectorPhoto from "../../assets/director.webp";
import RulesPhoto from "../../assets/rules.webp";
import SQlogo from "../../assets/sq_logo.png";


const Home = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);  
  };

  return (
    <>
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
              <li><button onClick={() => handleChangeLanguage("ru")}>RU</button></li>
              <li><button onClick={() => handleChangeLanguage("kz")}>KZ</button></li>
            </ul>
          </div>
        </div>
      </header>

      <section className="showdown">
        <div className="overlay">
          <h1>{t('showdown.title')}</h1>
          <p>{t('showdown.subheading')}</p>
        </div>
      </section>

      <section className="director-block">
        <div className="director-photo">
          <img src={DirectorPhoto} alt="Серик Жузбай" />
        </div>
        <div className="director-info">
          <h2>{t('director.title')}</h2>
          <h3>{t('director.name')}</h3>
          <p>{t('director.bio')}</p>
        </div>
      </section>

      <section className="showdown-section">
        <div className="content">
          <h1 className="title">{t('showdown.title')}</h1>
          <p className="description">{t('showdown.description')}</p>
        </div>
        <div className="photo">
          <img src={RulesPhoto} alt="Логотип Showdown" />
        </div>
      </section>

      <section className="showdown-news">
      <a
              href="https://www.showdown.kz/posts/8841cf1e-1618-4dd6-8ed6-bf0992bac05c"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
        <div className="contenе">
          <div className="news">
            <h1>{t('showdown.homenews')}</h1>
          </div>
        </div>
            </a>
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
    </>
  );
};

export default Home;

