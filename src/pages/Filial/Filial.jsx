import React from "react";
import "./Filial.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
            <img src="src/assets/sdlogo.webp" alt="Логотип" />
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
      
      <h1 class="filh1">Наши Филиалы:</h1>
           <div class="card-container">
            <div class="branch-card">
              <img src="src/assets/p1.webp" alt="Logo" class="branch-logo" />
              <h3 class="branch-city">Город Астана</h3>
              <p class="branch-owner">Серик Жузбай</p>
              <p class="branch-address">Адрес: Бокейхана 25г</p>
              <p class="branch-phone">Тел: <a href="tel:87074000471">87074000471</a></p>
              <p class="branch-phone">Тел: <a href="tel:87023665128">87023665128</a></p>
            </div>
        
            <div class="branch-card">
              <img src="src/assets/p2.webp" alt="Logo" class="branch-logo" />
              <h3 class="branch-city">Город Шымкент</h3>
              <p class="branch-owner">Владелец: Байбоснов Серик</p>
              <p class="branch-address">Адрес: Турмахан Орынбаев, 45</p>
              <p class="branch-phone">Тел: <a href="tel:87023665128">87023665128</a></p>
            </div>
            <div class="branch-card">
                <img src="src/assets/p3.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Абайский район</h3>
                <p class="branch-owner">Владелец: ОРАЗБАЕВ КАЙРАТ</p>
                <p class="branch-address">Адрес: Семей, улица Юность, дом 37</p>
                <p class="branch-phone">Тел: <a href="tel:87478495103">87478495103</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p4.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Акмолинская область</h3>
                <p class="branch-owner">Владелец: С.МАЯ</p>
                <p class="branch-address">Адрес: Кошчи, улица Бейбитшилик, дом 11</p>
                <p class="branch-phone">Тел: <a href="tel:87024815693">87024815693</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p5.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Актюбинская область</h3>
                <p class="branch-owner">Владелец: Рустемов Нуржан</p>
                <p class="branch-address">Адрес: Каргалжинская,дом 5</p>
                <p class="branch-phone">Тел: <a href="tel:87025146444">87025146444</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p6.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Алматинская область</h3>
                <p class="branch-owner">Владелец: Оразбаев Талгат</p>
                <p class="branch-address">Адрес: город Қонаев, Микрорайон 4, дом 21</p>
                <p class="branch-phone">Тел: <a href="tel:87074900830">87074900830</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p7.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Жамбылская область</h3>
                <p class="branch-owner">Владелец: КУРКЕБАЕВ РУСТЕМ</p>
                <p class="branch-address">Адрес: Тараз, улица Абдикадыра Жургенова, дом 7</p>
                <p class="branch-phone">Тел: <a href="tel:87053946038">87053946038</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p8.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Жетысуский район</h3>
                <p class="branch-owner">Владелец: Талдыкорган, Микрорайон Жастар, дом 39А</p>
                <p class="branch-address">Адрес: Турмахан Орынбаев, 45</p>
                <p class="branch-phone">Тел: <a href="tel:87752766859">87752766859</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p9.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Карагандинская область</h3>
                <p class="branch-owner">Владелец: АЙТКЕШОВ ЖАСҚАНАТ</p>
                <p class="branch-address">Адрес: Микрорайон 11-А, дом 9</p>
                <p class="branch-phone">Тел: <a href="tel:87015924791">87015924791</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p10.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Мангистауская область</h3>
                <p class="branch-owner">Владелец: БОРТБАЕВА МАРИЯШ</p>
                <p class="branch-address">Адрес: Актау, Микрорайон 3, дом 15,</p>
                <p class="branch-phone">Тел: <a href="tel:87715281812">87715281812</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p11.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Павлодарская область</h3>
                <p class="branch-owner">Владелец: Каймулдинов Хималидин</p>
                <p class="branch-address">Адрес: Павлодар, улица Ворушина, дом 8/1</p>
                <p class="branch-phone">Тел: <a href="tel:87023665128">87771240500</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p12.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Туркестанская область</h3>
                <p class="branch-owner">Владелец: ТАСҚЫНБАЕВ МҰХАММЕДӘЛІ</p>
                <p class="branch-address">Адрес: Отырар, дом 57</p>
                <p class="branch-phone">Тел: <a href="tel:87784612293">87784612293</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p13.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Восточно-Казахстанская область</h3>
                <p class="branch-owner">Владелец: Байбоснов Серик</p>
                <p class="branch-address">Адрес: Турмахан Орынбаев, 45</p>
                <p class="branch-phone">Тел: <a href="tel:87472372824">87472372824</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p14.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Город Актау</h3>
                <p class="branch-owner">Владелец: ИСХАКОВ САГДАТ</p>
                <p class="branch-address">Адрес: Уральск, улица Тұмар Ханым, дом 28/1</p>
                <p class="branch-phone">Тел: <a href="tel:87788967724">87788967724</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p16.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Город Усть-Каменогорск</h3>
                <p class="branch-owner">Владелец: МУКАШЕВ МАГЗАТ</p>
                <p class="branch-address">Адрес: город Усть-Каменогорск, улица Достық 8</p>
                <p class="branch-phone">Тел: <a href="tel:87023665128">87472372824</a></p>
              </div>
              <div class="branch-card">
                <img src="src/assets/p17.webp" alt="Logo" class="branch-logo" />
                <h3 class="branch-city">Город Тараз</h3>
                <p class="branch-owner">Владелец: КУРКЕБАЕВ РУСТЕМ</p>
                <p class="branch-address">Адрес: Тараз, улица Абдикадыра Жургенова, дом 7</p>
                <p class="branch-phone">Тел: <a href="tel:87053946038">87053946038</a></p>
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
            <h3>О нас</h3>
            <p>Волонтеры</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Filial;