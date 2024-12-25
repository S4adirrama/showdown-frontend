import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import axios from "axios";
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
                <img src={imageMapping[posts.length - index] || imageMapping[1]} alt="" />
              </div>
              <div className="rule-text">
                <p>{post.title.kz}</p>
                <p>{post.description.kz}</p>
                <hr />
                <p>{post.title.ru}</p>
                <p>{post.description.ru}</p>
              </div>
            </div>
          </Link>
        )) : <p style={{textAlign: "center", fontSize: "22px"}}>Загрузка постов...</p>}
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

export default News;
