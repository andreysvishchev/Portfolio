import React from "react";
import style from "./Profile.module.scss";
export const Profile = () => {
  return (
    <div className={style.wrap}>
      <div className={style.user}>
        <img className={style.avatar} src="" alt="фото" />
        <h3 className={style.title}>Andrey Svishchev</h3>
        <p className={style.profession}>Front-end Deweloper</p>
      </div>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.coluomn}>
            <h6 className={style.coluomn__title}>Residence:</h6>
            <h6 className={style.coluomn__title}>City:</h6>
            <h6 className={style.coluomn__title}>Age:</h6>
          </div>
          <div className={style.coluomn}>
            <p className={style.column__text}>Russia</p>
            <p className={style.column__text}>Nizhniy Novgorod</p>
            <p className={style.column__text}>26</p>
          </div>
        </div>
        <div className={style.row}></div>
      </div>
    </div>
  );
};
