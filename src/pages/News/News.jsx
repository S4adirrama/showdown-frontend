import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import SDlogo from "../../assets/sdlogo.webp";
import PostImage1 from "../../assets/post1.jpg";
import PostImage2 from "../../assets/post2.jpg";
import PostImage3 from "../../assets/post3.jpg";
import PostImage4 from "../../assets/post4.jpg";
import PostImage5 from "../../assets/post5.jpg";
import PostImage6 from "../../assets/post6.jpg";
import PostImage7 from "../../assets/post7.jpg";
import PostImage8 from "../../assets/post8.jpg";
import PostImage9 from "../../assets/post9.jpg";
import PostImage10 from "../../assets/post10.jpg";
import PostImage11 from "../../assets/post11.jpg";
import PostImage12 from "../../assets/post12.jpg";
import PostImage13 from "../../assets/post13.jpg";
import PostImage14 from "../../assets/post14.jpg";
import PostImage15 from "../../assets/post15.jpg";
import PostImage16 from "../../assets/post0.jpg"
import SQlogo from "../../assets/sq_logo.png";


const News = ({ setIndexOfPost }) => {
  const [posts, setPosts] = useState([]);

  const imageMapping = {
    1: PostImage1,
    2: PostImage2,
    3: PostImage3,
    4: PostImage4,
    5: PostImage5,
    6: PostImage6,
    7: PostImage7,
    8: PostImage8,
    9: PostImage9,
    10: PostImage10,
    11: PostImage11,
    12: PostImage12,
    13: PostImage13,
    14: PostImage14,
    15: PostImage15,
    0: PostImage16,

  };

  const getPosts = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/getPosts`,
      });

      console.log(res?.data);
      setPosts(res?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

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

      <main>
        {posts.length ? posts.map((post, index) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div
              className="rule-block"
              onClick={() => {
                console.log(`length: ${posts.length} - index: ${index}`);
                setIndexOfPost(posts.length - index);
              }}
            >
              <div className="rule-image">
                <img src={imageMapping[15 - index] || imageMapping[0]} alt="" />
              </div>
              <div className="rule-text">
                <div
                  dangerouslySetInnerHTML={{ __html: post.title.kz }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: post.description.kz }}
                ></div>
                <hr />
                <div
                  dangerouslySetInnerHTML={{ __html: post.title.ru }}
                ></div>
                <div
                  dangerouslySetInnerHTML={{ __html: post.description.ru }}
                ></div>
                </div>
              </div>
          </Link>
        )) : <p style={{textAlign: "center", fontSize: "22px"}}>Загрузка постов...</p>}
      </main>

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

export default News;
