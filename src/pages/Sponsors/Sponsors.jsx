import React from "react";
import "./Sponsors.css";
import { Link } from "react-router-dom";
import SDlogo from "../../assets/sdlogo.webp";
import Sponsor1 from "../../assets/son1.avif";
import Sponsor2 from "../../assets/son2.avif";
import Sponsor3 from "../../assets/son3.avif";
import Sponsor4 from "../../assets/son4.avif";
import Sponsor5 from "../../assets/son5.avif";
import Sponsor6 from "../../assets/son6.avif";
import Sponsor7 from "../../assets/son7.avif";

const Sponsors = () => {
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
        </div>
      </header>

      <main className="container-card">
        <div className="card" onClick={() => console.log("Modal 1 opened")}>
          <div className="card-image">
            <img src={Sponsor1} alt="Спонсор 1" />
          </div>
          <div className="card-content">
            <h3>Спортты қолдау қоры</h3>
            <p>Қор дене шынықтыру мен спортты дамытуға бағытталған бюджеттен тыс ақша қаражатын бөлу жөніндегі бірыңғай оператор болып табылады.
              Ұйым қайырымдылық көмек көрсетуге өтініштерді қабылдаумен, өңдеумен және талдаумен айналысады. Жобалар бойынша шешімдерді Қордың Қамқоршылық кеңесі қабылдайды.</p>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 2 opened")}>
          <div className="card-image">
            <img src={Sponsor2} alt="Спонсор 2" />
          </div>
          <div className="card-content">
            <h3>БІЗДІҢ ТӘЖІРИБЕМІЗ – СІЗДІҢ СЕНІМДІЛІГІҢІЗ!</h3>
            <p>"Бемер Арматура Қазақстан" ЖШС "Бемер" маркасының ресми өкілі және Қазақстан Республикасы мен Еуразиялық экономикалық одақ елдерінің аумағындағы BÖHMER GmbH және "Бемер Арматура" ЖШС жалғыз ресми өкілі болып табылады.</p>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 3 opened")}>
          <div className="card-image">
            <img src={Sponsor3} alt="Спонсор 3" />
          </div>
          <div className="card-content">
            <h3>HOTEL E-LITE&MeATADOR</h3>
            <p>"E-LITE" қонақ үйі қонақтарға ақша үшін лайықты баға ұсынады. Жайлы бөлмелер, сәнді таңғы ас және қызметтің жоғары деңгейі қонақүйді жұмыс пен демалыс үшін тамаша орынға айналдырады.</p>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 4 opened")}>
          <div className="card-image">
            <img src={Sponsor4} alt="Спонсор 4" />
          </div>
          <div className="card-content">
            <h3>ӘСІП ЦЕНТР</h3>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 5 opened")}>
          <div className="card-image">
            <img src={Sponsor5} alt="Спонсор 5" />
          </div>
          <div className="card-content">
            <h3>КАРИМА ПЛОВ ЦЕНТР</h3>
            <p>"Бемер Арматура Қазақстан" ЖШС "Бемер" маркасының ресми өкілі және Қазақстан Республикасы мен Еуразиялық экономикалық одақ елдерінің аумағындағы BÖHMER GmbH және "Бемер Арматура" ЖШС жалғыз ресми өкілі болып табылады.</p>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 6 opened")}>
          <div className="card-image">
            <img src={Sponsor6} alt="Спонсор 6" />
          </div>
          <div className="card-content">
            <h3>"ASTANA" ӘЛЕУМЕТТІК - КӘСІПКЕРЛІК КОРПОРАЦИЯСЫ АКЦИОНЕРЛІК ҚОҒАМЫ</h3>
            <p>Біздің пайымымыз: Өңірлік даму институты болып табылатын, активтерді тиімді басқаратын, инвестициялар тарту арқылы өңірдің өсу нүктелерінде экономикалық белсенділікті ынталандыратын холдингтік компания.</p>
          </div>
        </div>

        <div className="card" onClick={() => console.log("Modal 7 opened")}>
          <div className="card-image">
            <img src={Sponsor7} alt="Спонсор 7" />
          </div>
          <div className="card-content">
            <h3>ЖАРНАМА - ӨНДІРІСТІК КОМПАНИЯСЫ KAZ-IMPERIA</h3>
            <p>Біз қол жетімді бағамен өз жабдықтарымызда жоғары сапалы жарнама өнімдерін шығарамыз!</p>
          </div>
        </div>
      </main>

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

export default Sponsors;
