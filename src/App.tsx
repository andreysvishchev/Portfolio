import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import style from "./App.module.scss";

import { Content } from "./components/content/Content";
import { Menu } from "./components/menu/Menu";

import { Profile } from "./components/profile/Profile";

function App() {
  const [active, setActive] = useState(false);

  const homePath = "/Content";

  return (
    <BrowserRouter>
      <div className={style.main}>
        <div className={style.container}>
          <Profile />
          <div className={active ? `${style.content} ${style.active}` : style.content}>
            <Routes>
              <Route path="/" element={<Navigate to={homePath} />} />
              <Route path="/Content" element={<Content active={active} />} />
            </Routes>
          </div>

          <Menu active={active} setActive={setActive} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
