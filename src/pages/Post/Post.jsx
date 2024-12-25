import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import post1 from "../../assets/post1.jpg"
import post2 from "../../assets/post2.jpg"

const Post = ({ indexOfPost }) => {

  const index2image = {
    1: post1,
    2: post2,
    /*3: post3,
    4: post4,
    5: post5,
    6: post6,
    7: post7,
    8: post8,
    9: post9,
    10: post10,
    11: post11,
    12: post12,
    13: post13,
    14: post14,
    15: post15, */
  }

  const [post, setPost] = useState("")
  const [currentLang, setCurrentLang] = useState("ru")
  const [imgUrl, setImgUrl] = useState("/src/assets/news.jpg")

  const { id } = useParams()

  console.log(id)

  const getPost = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/getPost`,
        data: { id }
      });

      console.log(res?.data);
      setPost(res?.data)
      
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPost()
    console.log(indexOfPost)
    setImgUrl(index2image[indexOfPost])
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={`${styles.langChanger} ${currentLang == "ru" && styles.langChangerActive}`} onClick={() => setCurrentLang("ru")}>ru</button>
        <span> </span>
        <button className={`${styles.langChanger} ${currentLang == "kz" && styles.langChangerActive}`} onClick={() => setCurrentLang("kz")}>kz</button>
        <h2 className={styles.title}>{currentLang == "ru" ? post?.title?.ru : post?.title?.kz}</h2>
        {/* <img src={`/src/assets/post${indexOfPost}.jpg`} alt="" /> */}
        {/* <img src="src/assets/news2.jpg" alt="" /> */}
        <img src={imgUrl} alt="" className={styles.image} />

        <p className={styles.text}>{currentLang == "ru" ? post?.text?.ru : post?.text?.kz}</p>
      </div>
    </div>
  );
};

export default Post;