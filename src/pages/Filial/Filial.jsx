import React from "react";
import "./Filial.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SDlogo from "../../assets/sdlogo.webp";
import BranchImage1 from "../../assets/p1.webp";
import BranchImage2 from "../../assets/p2.webp";
import BranchImage3 from "../../assets/p3.webp";
import BranchImage4 from "../../assets/p4.webp";
import BranchImage5 from "../../assets/p5.webp";
import BranchImage6 from "../../assets/p6.webp";
import BranchImage7 from "../../assets/p7.webp";
import BranchImage8 from "../../assets/p8.webp";
import BranchImage9 from "../../assets/p9.webp";
import BranchImage10 from "../../assets/p10.webp";
import BranchImage11 from "../../assets/p11.webp";
import BranchImage12 from "../../assets/P12.webp";
import BranchImage13 from "../../assets/P13.webp";
import BranchImage14 from "../../assets/P14.webp";
import BranchImage15 from "../../assets/P16.webp";
import BranchImage16 from "../../assets/P17.webp";

const Filial = () => {
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
              <li><Link to="/">ГЛАВНАЯ СТРАНИЦА</Link></li>
              <li><Link to="/about-us">О НАС</Link></li>
              <li><Link to="/rules">ПРАВИЛА ИГРЫ</Link></li>
              <li><Link to="/filial">ФИЛИАЛЫ</Link></li>
              <li><Link to="/news">НОВОСТИ</Link></li>
              <li><Link to="/sponsors">СПОНСОР</Link></li>
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
      
      <h1 className="filh1">Наши Филиалы:</h1>
           <div className="card-container">
            <div className="branch-card">
              <img src={BranchImage1} alt="Logo" className="branch-logo" />
              <h3 className="branch-city">Город Астана</h3>
              <p className="branch-owner">Серик Жузбай</p>
              <p className="branch-address">Адрес: Бокейхана 25г</p>
              <p className="branch-phone">Тел: <a href="tel:87074000471">87074000471</a></p>
              <p className="branch-phone">Тел: <a href="tel:87023665128">87023665128</a></p>
            </div>
        
            <div className="branch-card">
              <img src={BranchImage2} alt="Logo" className="branch-logo" />
              <h3 className="branch-city">Город Шымкент</h3>
              <p className="branch-owner">Владелец: Байбоснов Серик</p>
              <p className="branch-address">Адрес: Турмахан Орынбаев, 45</p>
              <p className="branch-phone">Тел: <a href="tel:87023665128">87023665128</a></p>
            </div>
            <div className="branch-card">
                <img src={BranchImage3} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Абайский район</h3>
                <p className="branch-owner">Владелец: ОРАЗБАЕВ КАЙРАТ</p>
                <p className="branch-address">Адрес: Семей, улица Юность, дом 37</p>
                <p className="branch-phone">Тел: <a href="tel:87478495103">87478495103</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage4} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Акмолинская область</h3>
                <p className="branch-owner">Владелец: С.МАЯ</p>
                <p className="branch-address">Адрес: Кошчи, улица Бейбитшилик, дом 11</p>
                <p className="branch-phone">Тел: <a href="tel:87024815693">87024815693</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage5} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Актюбинская область</h3>
                <p className="branch-owner">Владелец: Рустемов Нуржан</p>
                <p className="branch-address">Адрес: Каргалжинская,дом 5</p>
                <p className="branch-phone">Тел: <a href="tel:87025146444">87025146444</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage6} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Алматинская область</h3>
                <p className="branch-owner">Владелец: Оразбаев Талгат</p>
                <p className="branch-address">Адрес: город Қонаев, Микрорайон 4, дом 21</p>
                <p className="branch-phone">Тел: <a href="tel:87074900830">87074900830</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage7} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Жамбылская область</h3>
                <p className="branch-owner">Владелец: КУРКЕБАЕВ РУСТЕМ</p>
                <p className="branch-address">Адрес: Тараз, улица Абдикадыра Жургенова, дом 7</p>
                <p className="branch-phone">Тел: <a href="tel:87053946038">87053946038</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage8} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Жетысуский район</h3>
                <p className="branch-owner">Владелец: Талдыкорган, Микрорайон Жастар, дом 39А</p>
                <p className="branch-address">Адрес: Турмахан Орынбаев, 45</p>
                <p className="branch-phone">Тел: <a href="tel:87752766859">87752766859</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage9} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Карагандинская область</h3>
                <p className="branch-owner">Владелец: АЙТКЕШОВ ЖАСҚАНАТ</p>
                <p className="branch-address">Адрес: Микрорайон 11-А, дом 9</p>
                <p className="branch-phone">Тел: <a href="tel:87015924791">87015924791</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage10} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Мангистауская область</h3>
                <p className="branch-owner">Владелец: БОРТБАЕВА МАРИЯШ</p>
                <p className="branch-address">Адрес: Актау, Микрорайон 3, дом 15,</p>
                <p className="branch-phone">Тел: <a href="tel:87715281812">87715281812</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage11} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Павлодарская область</h3>
                <p className="branch-owner">Владелец: Каймулдинов Хималидин</p>
                <p className="branch-address">Адрес: Павлодар, улица Ворушина, дом 8/1</p>
                <p className="branch-phone">Тел: <a href="tel:87023665128">87771240500</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage12} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Туркестанская область</h3>
                <p className="branch-owner">Владелец: ТАСҚЫНБАЕВ МҰХАММЕДӘЛІ</p>
                <p className="branch-address">Адрес: Отырар, дом 57</p>
                <p className="branch-phone">Тел: <a href="tel:87784612293">87784612293</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage13} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Восточно-Казахстанская область</h3>
                <p className="branch-owner">Владелец: Байбоснов Серик</p>
                <p className="branch-address">Адрес: Турмахан Орынбаев, 45</p>
                <p className="branch-phone">Тел: <a href="tel:87472372824">87472372824</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage14} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Город Актау</h3>
                <p className="branch-owner">Владелец: ИСХАКОВ САГДАТ</p>
                <p className="branch-address">Адрес: Уральск, улица Тұмар Ханым, дом 28/1</p>
                <p className="branch-phone">Тел: <a href="tel:87788967724">87788967724</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage15} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Город Усть-Каменогорск</h3>
                <p className="branch-owner">Владелец: МУКАШЕВ МАГЗАТ</p>
                <p className="branch-address">Адрес: город Усть-Каменогорск, улица Достық 8</p>
                <p className="branch-phone">Тел: <a href="tel:87023665128">87472372824</a></p>
              </div>
              <div className="branch-card">
                <img src={BranchImage16} alt="Logo" className="branch-logo" />
                <h3 className="branch-city">Город Тараз</h3>
                <p className="branch-owner">Владелец: КУРКЕБАЕВ РУСТЕМ</p>
                <p className="branch-address">Адрес: Тараз, улица Абдикадыра Жургенова, дом 7</p>
                <p className="branch-phone">Тел: <a href="tel:87053946038">87053946038</a></p>
              </div>
            
          </div>

      <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ flex: '1 1 300px', margin: '20px' }}>
            <h3>Контакты</h3>
            <p>Адрес: ул. Алихана бокейхана 25, Астана 020000</p>
            <p>
              Телефон:{' '}
              <a href="tel:+77029113002" style={{ color: '#4caf50' }}>
                8(7172)45-69-85 <br />
                8(777)813-56-39
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

          <div style={{ flex: '1 1 300px', margin: '20px' }}>
            <h3>О нас</h3>
            <p>Волонтеры</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Filial;
