import React from "react";
import "./Sponsors.css";
import { Link } from "react-router-dom";

const Sponsors = () => {
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
          {/* <div className="language-selector">
            <ul>
              <li><a href="ru">RU</a></li>
              <li><a href="kz">KZ</a></li>
            </ul>
          </div> */}
        </div>
      </header>

      <main class="container-card">
        
        <div class="card" onclick="openModal('modal-1')">
            <div class="card-image">
                <img src="src/assets/son1.avif" alt="Спонсор 1" />
            </div>
            <div class="card-content">
                <h3>Спортты қолдау қоры</h3>
                <p>Қор дене шынықтыру мен спортты дамытуға бағытталған бюджеттен тыс ақша қаражатын бөлу жөніндегі бірыңғай оператор болып табылады.

                    Ұйым қайырымдылық көмек көрсетуге өтініштерді қабылдаумен, өңдеумен және талдаумен айналысады. Жобалар бойынша шешімдерді Қордың Қамқоршылық кеңесі қабылдайды.</p>
            </div>
        </div>

        
        <div class="card" onclick="openModal('modal-2')">
            <div class="card-image">
                <img src="src/assets/son2.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>БІЗДІҢ ТӘЖІРИБЕМІЗ – СІЗДІҢ СЕНІМДІЛІГІҢІЗ!</h3>
                <p>"Бемер Арматура Қазақстан" ЖШС "Бемер" маркасының ресми өкілі және Қазақстан Республикасы мен Еуразиялық экономикалық одақ елдерінің аумағындағы BÖHMER GmbH және "Бемер Арматура" ЖШС жалғыз ресми өкілі болып табылады.</p>
            </div>
        </div>
        <div class="card" onclick="openModal('modal-3')">
            <div class="card-image">
                <img src="src/assets/son3.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>HOTEL E-LITE&MeATADOR</h3>
                <p>"E-LITE" қонақ үйі қонақтарға ақша үшін лайықты баға ұсынады. Жайлы бөлмелер, сәнді таңғы ас және қызметтің жоғары деңгейі қонақүйді жұмыс пен демалыс үшін тамаша орынға айналдырады.

                    Жақын жерде жеңіл атлетика кешені, Барыс-Арена, Астана-Арена, Назарбаев Университеті, ЭКСПО-2017, Мерседес-орталық және басқа да мәдени-спорттық ғимараттар мен көрікті жерлер орналасқан.</p>
            </div>
        </div>
        <div class="card" onclick="openModal('modal-4')">
            <div class="card-image">
                <img src="src/assets/son4.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>ӘСІП ЦЕНТР</h3>
                <p></p>
            </div>
        </div>
        <div class="card" onclick="openModal('modal-5')">
            <div class="card-image">
                <img src="src/assets/son5.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>КАРИМА ПЛОВ ЦЕНТР</h3>
                <p>"Бемер Арматура Қазақстан" ЖШС "Бемер" маркасының ресми өкілі және Қазақстан Республикасы мен Еуразиялық экономикалық одақ елдерінің аумағындағы BÖHMER GmbH және "Бемер Арматура" ЖШС жалғыз ресми өкілі болып табылады.</p>
            </div>
        </div>
        <div class="card" onclick="openModal('modal-6')">
            <div class="card-image">
                <img src="src/assets/son6.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>"ASTANA" ӘЛЕУМЕТТІК - КӘСІПКЕРЛІК КОРПОРАЦИЯСЫ АКЦИОНЕРЛІК ҚОҒАМЫ</h3>
                <p>Біздің пайымымыз
                    Өңірлік даму институты болып табылатын, активтерді тиімді басқаратын, сонымен қатар инвестициялар тарту арқылы өңірдің өсу нүктелерінде экономикалық белсенділікті ынталандыратын, бәсекеге қабілетті орнықты өндірістерді қалыптастырудың катализаторы болып табылатын және корпоративтік басқарудың жоғары стандарттарымен ерекшеленетін холдингтік компания.
                    Біздің міндетіміз
                    Мемлекет пен бизнестің серіктестік қағидаттары бойынша өңірдің әлеуметтік-экономикалық дамуына ықпал ету.
                    Біздің мақсатымыз
                    Белсенді Инвестициялық саясат жүргізу арқылы Астана қаласының әлеуметтік-экономикалық дамуының өсуі белсенді инвестициялық саясатын жүргізу арқылы Астана қаласының әлеуметтік-экономикалық дамуын арттыру.</p>
            </div>
        </div>
        <div class="card" onclick="openModal('modal-7')">
            <div class="card-image">
                <img src="src/assets/son7.avif" alt="Спонсор 2" />
            </div>
            <div class="card-content">
                <h3>ЖАРНАМА - ӨНДІРІСТІК КОМПАНИЯСЫ KAZ-IMPERIA</h3>
                <p>Компания туралы
                    Біз қол жетімді бағамен өз жабдықтарымызда жоғары сапалы жарнама өнімдерін шығарамыз!</p>
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
  );s
};

export default Sponsors;