import React from "react";
import { Burger } from "./burger/Burger";
import style from "./Menu.module.scss";

export const Menu = () => {
  return (
    <div className={style.section}>
      <div className={style.block}>
        <Burger />
      </div>

      <h2 className={style.title}>Menu</h2>

      <div className={style.block}>
        <button>EU</button>
        <button>RU</button>
      </div>
    </div>
  );
};
