import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {

  const navigate = useNavigate();

  const [isAuthorized, setIsAuthorized] = useState(true)

  const [login, setLogin] = useState({
    login: "showdown",
    pass: "admin",
  })
  const [isWaiting, setIsWaiting] = useState(false)
  const [err, setErr] = useState(false)

  const authorize = async () => {
    try {
      setIsWaiting(true)
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/api/login`,
        data: login
      });

      setIsWaiting(false)
      setIsAuthorized(true)
      console.log(res?.data);


    } catch (e) {
      setIsWaiting(false)
      console.log(e)
      setErr("Ошибка данных входа")
    }
  }

  return (
    <>
      {isAuthorized ? (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h3 className={styles.title}>Добавление нового поста:</h3>
            <div className={styles.block}>
              <p className={styles.name}>Имя поста:</p>
              <input
                type="text"
                placeholder="(каз)"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="(рус)"
                className={styles.input}
              />
            </div>
            <div className={styles.block}>
              <p className={styles.name}>Имя поста:</p>
              <input
                type="text"
                placeholder="(каз)"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="(рус)"
                className={styles.input}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.authwrapper}>
          <div className={styles.authbody}>
            <h3 className={styles.authtitle}>Вход</h3>
            <input
              type="text"
              placeholder="Логин"
              className={styles.authinput}
              value={login.login}
              onChange={e => setLogin(prev => ({ ...prev, login: e.target.value }))}
            />
            <input
              type="password"
              placeholder="Пароль"
              className={styles.authinput}
              value={login.pass}
              onChange={e => setLogin(prev => ({ ...prev, pass: e.target.value }))}
            />
            <button className={styles.authbutton} onClick={authorize}>{isWaiting ? "Проверка..." : "Войти"}</button>
            {err && <p className={styles.autherror}>{err}</p>}
          </div>
        </div>
      )}

    </>
  );
};

export default Login;