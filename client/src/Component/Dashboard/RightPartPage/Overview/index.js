import React from "react";
import style from "./style.module.css";
export default function Overview({ isOpen }) {
  return (
    <div className={isOpen ? style.owerviewOpen : style.closePart}>
      <h4 className={style.money}> $ 1000000</h4>
      <p>Find your account</p>
      <small>Please use the button to find your account</small>
    </div>
  );
}
