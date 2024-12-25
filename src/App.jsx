import React, { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import AboutUs from "./pages/AboutUs/AboutUs"
import Rules from "./pages/Rules/Rules"
import Filial from "./pages/Filial/Filial"
import News from "./pages/News/News"
import Sponsors from "./pages/Sponsors/Sponsors"
import Post from "./pages/Post/Post"


const App = () => {

  const [currentLang, setCurrentLang] = useState("ru")
  const [indexOfPost, setIndexOfPost] = useState(localStorage.getItem("showdownIndexOfPost") || 1)

  useEffect(() => {
    localStorage.setItem("showdownIndexOfPost", indexOfPost)
  }, [indexOfPost])

  return (
    // <div>

      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Home />} path="/" />
        <Route element={<Post indexOfPost={indexOfPost} />} path="/posts/:id" />
        <Route element={<AboutUs/>} path="/about-us" />
        <Route element={<Rules />} path="/rules" />
        <Route element={<Filial />} path="/filial" />
        <Route element={<News setIndexOfPost={setIndexOfPost} />} path="/news" />
        <Route element={<Sponsors />} path="/sponsors" />
      </Routes>

    // </div>
  )
}

export default App