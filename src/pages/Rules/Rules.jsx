import React from "react";
import "./Rules.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // For multi-language support

const Rules = () => {
  const { t, i18n } = useTranslation("global"); // Access translations and i18n instance

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Switch the language
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="src/assets/sdlogo.webp" alt="Логотип" />
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

      {/* Showdown Section */}
      <section className="rule-block">
        <div className="rule-image">
          <img src="src/assets/rules1.jpg" alt="Игрок за столом" />
        </div>
        <div className="rule-text">
          <h2>{t("rules.whatIsShowdown.title")}</h2>
          <p>{t("rules.whatIsShowdown.content")}</p>
        </div>
      </section>

      {/* Game Table Section */}
      <section className="rule-block">
        <div className="rule-text">
          <h2>{t("rules.gameTable.title")}</h2>
          <p>{t("rules.gameTable.content")}</p>
        </div>
        <div className="rule-image">
          <img src="src/assets/rules2.avif" alt="Стол для Шоудана" />
        </div>
      </section>

      {/* Equipment Section */}
      <section className="rule-block">
        <div className="rule-image">
          <img src="src/assets/rules3.avif" alt="Перчатки и оборудование" />
        </div>
        <div className="rule-text">
          <h2>{t("rules.equipment.title")}</h2>
          <p>{t("rules.equipment.content")}</p>
        </div>
      </section>

      {/* Game Goal Section */}
      <section className="rule-block">
        <div className="rule-text">
          <h2>{t("rules.gameGoal.title")}</h2>
          <p>{t("rules.gameGoal.content")}</p>
        </div>
        <div className="rule-image">
          <img src="src/assets/rules4.avif" alt="Мяч и ракетка" />
        </div>
      </section>

      {/* Footer Section */}
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

export default Rules;
