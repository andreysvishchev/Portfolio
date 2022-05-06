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
          <div className={style.column}>
            <h6 className={style.column__title}>Residence:</h6>
            <h6 className={style.column__title}>City:</h6>
            <h6 className={style.column__title}>Age:</h6>
          </div>
          <div className={style.column}>
            <p className={style.column__text}>Russia</p>
            <p className={style.column__text}>Nizhniy Novgorod</p>
            <p className={style.column__text}>26</p>
          </div>
        </div>
        <div className={style.row}>
          <div className="row__item"></div>
        </div>
      </div>
    </div>
  );
};
