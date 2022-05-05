import { log } from "console";
import React, { useRef, useState } from "react";
import { Burger } from "./burger/Burger";
import style from "./Menu.module.scss";
import { Nav } from "./nav/Nav";

export const Menu = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className={active ? `${style.wrap} ${style.active}` : style.wrap}>
      <div className={style.block}>
        <button onClick={toggleClass}>burger</button>
      </div>

      <h2 className={active ? `${style.title} ${style.active}` : style.title}>Menu</h2>

      <Nav active={active} />

      <div className={`${style.block} ${style.langauge}`}>
        <button>EU</button>
        <button>RU</button>
      </div>
    </div>
  );
};
