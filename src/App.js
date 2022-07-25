import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [toggle, setToggle] = useState("light");
  const [textColor, setTextColor] = useState({
    color: "black",
  });
  const [toggleText, setToggleText] = useState("Enable Dark Mode");

  function changeMode() {
    if (toggle === "light") {
      document.body.style.backgroundColor = "#212529";
      setToggle("dark");
      setTextColor({
        color: "white",
      });
      setToggleText("Enable Light Mode");
    } else {
      document.body.style.backgroundColor = "white";
      setToggle("light");
      setTextColor({
        color: "black",
      });
      setToggleText("Enable Dark Mode");
    }
  }
  let obj = {
    backgroundColor: toggle === "light" ? "white" : "#212529",
    color: toggle === "light" ? "black" : "white",
  };



  return (
    <>
    {/* Routers in React JS */}
      <BrowserRouter>
        <Navbar
          title="TextUtilities"
          mode={toggle}
          modefunc={changeMode}
          textColor={textColor}
          toggleText={toggleText}
        />
        <Routes>
          <Route path="/" element={
              <TextForm
                heading="Enter text here"
                textColor={textColor}
                mode={toggle}
                textareaColor={obj}/>
            }>
          </Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
