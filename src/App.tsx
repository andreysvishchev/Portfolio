import React, { useState } from "react";

import style from "./App.module.scss";

import { Content } from "./components/content/Content";
import { Menu } from "./components/menu/Menu";

import { Profile } from "./components/profile/Profile";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <Profile />
        <Content active={active} />
        <Menu active={active} setActive={setActive} />
      </div>
    </div>
  );
}

export default App;
