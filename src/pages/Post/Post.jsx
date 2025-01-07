import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from 'react-i18next';

// Import all images
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
import PostImage16 from "../../assets/post0.jpg";
import PostImage17 from "../../assets/post17.jpg";
import PostImage18 from "../../assets/post18.jpg";
import PostImage19 from "../../assets/post19.jpg";

const Post = ({ indexOfPost }) => {
  useTranslation("global");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);  
  };
  const index2image = {
    1: [PostImage1, PostImage2, PostImage3],
    2: [PostImage2, PostImage17, PostImage18, PostImage19],
    3: [PostImage3],
    4: [PostImage4],
    5: [PostImage5],
    6: [PostImage6],
    7: [PostImage7],
    8: [PostImage8],
    9: [PostImage9],
    10: [PostImage10],
    11: [PostImage11],
    12: [PostImage12],
    13: [PostImage13],
    14: [PostImage14],
    15: [PostImage15],
    0: [PostImage16]
  };

  const youtubeLinks = [
    "https://youtube.com/shorts/KDnA8mWVDvo?si=c7UCcTNJXrtrJyvN",
    "https://youtube.com/shorts/guy0qyNMY4k?si=rEf1M3WT3xDztxDY"
  ];

  const [post, setPost] = useState("");
  const [currentLang, setCurrentLang] = useState("ru");
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();

  const getPost = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/getPost`,
        data: { id }
      });
      setPost(res?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
    setImages(index2image[indexOfPost - 1] || [PostImage1]); // Default to PostImage1 if no match
  }, [indexOfPost]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const renderYouTubeVideo = (link) => {
    const embedLink = link.replace("watch?v=", "embed/").replace("shorts/", "embed/");
    return (
      <iframe
        key={link}
        width="560"
        height="315"
        src={embedLink}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
        className={styles.video}
      ></iframe>
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button
            className={`${styles.langChanger} ${
              currentLang === "ru" && styles.langChangerActive
            }`}
            onClick={() => setCurrentLang("ru")}
          >
            ru
          </button>
          <span> </span>
          <button
            className={`${styles.langChanger} ${
              currentLang === "kz" && styles.langChangerActive
            }`}
            onClick={() => setCurrentLang("kz")}
          >
            kz
          </button>
          <h2 className={styles.title}>
            {currentLang === "ru" ? post?.title?.ru : post?.title?.kz}
          </h2>
          <div className={styles.imageContainer}>
            <button className={styles.prevButton} onClick={prevImage}>
              {"<"}
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Post"
              className={styles.image}
            />
            <button className={styles.nextButton} onClick={nextImage}>
              {">"}
            </button>
          </div>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{
              __html: currentLang === "ru" ? post?.text?.ru : post?.text?.kz
            }}
          ></div>
          <h3 className={styles.subTitle}>Видео:</h3>
          <div className={styles.videoContainer}>
            {youtubeLinks.map((link) => renderYouTubeVideo(link))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
