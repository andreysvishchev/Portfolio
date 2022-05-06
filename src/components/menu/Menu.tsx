import { log } from "console";
import React, { useRef, useState } from "react";
import { Burger } from "./burger/Burger";
import style from "./Menu.module.scss";
import { Nav } from "./nav/Nav";

type MenuPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Menu = ({ active, setActive }: MenuPropsType) => {
  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className={active ? `${style.wrap} ${style.active}` : style.wrap}>
      <div className={style.block}>
        <button onClick={toggleClass} className={style.burger}>
          burger
        </button>
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
