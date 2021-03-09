import React from "react";
import style from "./style.module.css";

export default function ItemQuestion({ info }) {
  return (
    <div className={style.question}>
      <div className={style.text}>{info}</div>
    </div>
  );
}
