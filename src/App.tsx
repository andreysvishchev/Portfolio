import React from "react";

import style from "./App.module.scss";

import { Content } from "./components/content/Content";
import { Menu } from "./components/menu/Menu";

import { Profile } from "./components/profile/Profile";

function App() {
  return (
    <div className={style.main}>
      <Profile />
      <Content />
      <Menu />
    </div>
  );
}

export default App;
