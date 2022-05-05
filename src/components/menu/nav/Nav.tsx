import React from "react";
import style from "./Nav.module.scss";

type NavPropsType = {
  active: boolean;
};

export const Nav = ({ active }: NavPropsType) => {
  return (
    <nav className={active ? `${style.active} ${style.wrap}` : style.wrap}>
      <ul className={style.list}>
        <li className={active ? `${style.active} ${style.item}` : style.item}>
          <a className={style.link} href="#">
            Home
          </a>
        </li>
        <li className={active ? `${style.active} ${style.item}` : style.item}>
          <a className={style.link} href="#">
            About
          </a>
        </li>
        <li className={active ? `${style.active} ${style.item}` : style.item}>
          <a className={style.link} href="#">
            Portfolio
          </a>
        </li>
        <li className={active ? `${style.active} ${style.item}` : style.item}>
          <a className={style.link} href="#">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};
