import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import axios from "axios"

const News = ({setIndexOfPost}) => {

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/getPosts`,
      });

      console.log(res?.data);
      setPosts(res?.data)
      // try {
      //   setSpecs(JSON.parse(res.data.sysInfo))
      // } catch (e) {
      //   setSpecs("Error while parsing JSON")
      // }
      // setData(res?.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

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

      <main>

        {posts.map((post, index) => (
          <Link to={`/posts/${post.id}`}>
            <div class="rule-block" onClick={() => { console.log(`length: ${posts.length} - index: ${index}`); setIndexOfPost(posts.length - index) }}>
              <div class="rule-image">
                <img src={`src/assets/post${posts.length - index}.jpg`} alt="" />
              </div>
              <div class="rule-text">
                <p>{post.title.kz}</p>
                <p>{post.description.kz}</p>
                <hr />
                <p>{post.title.ru}</p>
                <p>{post.description.ru}</p>
              </div>
            </div>


          </Link>

        ))}

        {/*         <a href="#" class="rule-block">
          <div class="rule-image">
            <img src="src/assets/news1.jpg" alt="Игрок за столом" />
          </div>
          <div class="rule-text">
            <p>13-17 қараша аралығында Швейцарияның Цюрих қаласында көз жанарынан айырылған спортшылар арасында SHOWDOWN үстел теннисінен Халықаралық ZURICH OPEN турнирі өтті. Бұл жарыс ерекше күш-жігер мен шеберлікті талап ететін маңызды спорттық шара болды.</p>
            <p>Турнирге әлемнің 9 мемлекетінен – Қазақстан, Швейцария, Франция, Польша, Германия, Италия, Чехия, Бельгия және Словакиядан 50 үздік спортшы қатысты. Әлемнің түкпір-түкпірінен жиналған зағип спортшылар өздерінің жоғары деңгейдегі кәсіби шеберліктерін көрсетіп, спорттың мүмкіндіктер шекарасын кеңейтіп, баршаға үлгі бола білді.</p>
            <p>Бұл жарыс тек спорттық шеберлікті ғана емес, сондай-ақ жігерлілік, табандылық және командалық рухтың биіктігін паш етті. Осындай ауқымды шаралардың арқасында Шоудаун спорты әлемде кеңінен танылып, ерекше спортшылардың таланттары баршаға үлгі болып келеді.</p>
            <p>Қазақстандық команда үшін бұл турнир үлкен тәжірибе мен жаңа мақсаттарға жол ашты. Біз халықаралық аренада еліміздің намысын қорғап, болашақта одан да биік жетістіктерге жетеміз деп сенеміз!</p>
            <hr />
            <p>С 13 по 17 ноября в городе Цюрих, Швейцария, прошёл международный турнир ZURICH OPEN по настольному теннису SHOWDOWN среди спортсменов с нарушением зрения. Это уникальное спортивное событие стало настоящим испытанием мастерства и силы духа.</p>
            <p>В соревнованиях приняли участие 50 лучших спортсменов из 9 стран мира: Казахстана, Швейцарии, Франции, Польши, Германии, Италии, Чехии, Бельгии и Словакии. Спортсмены со всего мира продемонстрировали высочайший уровень подготовки, мастерства и выносливости, доказывая, что границ для человеческих возможностей не существует.
            </p>
            <p>Этот турнир стал не только ареной спортивных достижений, но и примером невероятной силы воли, сплочённости и стремления к победе. Благодаря таким масштабным событиям, спорт SHOWDOWN завоёвывает всё большую популярность, вдохновляя людей по всему миру и поднимая важные вопросы инклюзивности в спорте.</p>
            <p>Для казахстанской сборной участие в этом турнире стало ценным опытом и мотивировало на новые высоты. Мы уверены, что впереди нас ждут ещё большие достижения на международной арене!</p>
          </div>
        </a>



        <section class="rule-block">
          <div class="rule-image">
            <img src="src/assets/news3.jpg" alt="Игрок за столом" />
          </div>
          <div class="rule-text">
            <p>Қазақстан құрамасының халықаралық SHOWDOWN турниріндегі алғашқы қадамдары
              Қазақстан құрама мүшелері алғаш рет Халықаралық  жарысқа қатысып отыр. Алғашқы күні стандартталған SHOWDOWN  үстел теннисіне ойнау оңайға соқпады. Бірақ  турнирдің екінші, үшінші күні спортшыларымыз жақсы көрсеткіш көрсетіп,  17 -23 орындарды иеленді.
              Қазақстанның құрама мүшелері: Спортшыларымыз: <br />
              Керім Бексырғаұлы 23 орын<br />
              Айдар Саташев 22 орын<br />
              Гульсара Каттабекова 18 орын<br />
              Влада Бартусеевич  17 орын</p>
            <p>Жарысқа Қазақстан құрамасын алып келген:<br />
              SHOWDOWN үстел теннисінің президенті- Серік Жүзбай.<br />
              Жаттықтырушы:<br />
              Азамат Баймағанбетов.<br />
              Жетекшілер:<br />
              Кәмшат Рахимбаева.<br />
              Ербол Жуматаев </p>
            <p>📍Халықаралық турнирге баруға Қазақстан құрама мүшелеріне демеушілік қолдау көрсеткен @sportqory “Туризм индустриясы мен спортты қолдау қоры” КҚ.</p>
            <hr />
            <p>Первые шаги сборной Казахстана на международном турнире SHOWDOWN: Члены сборной Казахстана впервые приняли участие в международных соревнованиях. В первый день игры в стандартизированный настольный теннис SHOWDOWN дались непросто. Однако на второй и третий дни турнира наши спортсмены показали хорошие результаты, заняв места с 17-го по 23-е.</p>
            <p>Члены сборной Казахстана:<br />
              Керим Бексыргаулы — 23 место<br />
              Айдар Саташев — 22 место<br />
              Гульсара Каттабекова — 18 место<br />
              Влада Бартусевич — 17 место</p>
            <p>Сопровождающие:<br />
              Президент настольного тенниса SHOWDOWN — Серик Жузбай<br />
              Тренер — Азамат Баймаганбетов<br />
              Руководители — Камшат Рахимбаева и Ербол Жуматаев</p>
            <p>📍Участие членов сборной Казахстана в международном турнире стало возможным благодаря спонсорской поддержке @sportqory Фонда поддержки туриндустрии и спорта.</p>
          </div>
        </section> */}

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
  );
};

export default News;