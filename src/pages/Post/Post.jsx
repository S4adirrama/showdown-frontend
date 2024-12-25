import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
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

const Post = ({ indexOfPost }) => {
  const index2image = {
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

  const [post, setPost] = useState("");
  const [currentLang, setCurrentLang] = useState("ru");
  const [imgUrl, setImgUrl] = useState(PostImage1);

  const { id } = useParams();

  console.log(id);

  const getPost = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/getPost`,
        data: { id },
      });

      console.log(res?.data);
      setPost(res?.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
    console.log(indexOfPost);
    setImgUrl(index2image[indexOfPost] || PostImage1);
  }, [indexOfPost]);

  return (
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
        <img src={imgUrl} alt="Post" className={styles.image} />
        <p className={styles.text}>
          {currentLang === "ru" ? post?.text?.ru : post?.text?.kz}
        </p>
      </div>
    </div>
  );
};

export default Post;
