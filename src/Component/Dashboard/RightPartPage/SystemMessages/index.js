import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";

export default function SystemMessages() {
  const statusLang = useSelector((store) => store);
  console.log(statusLang);
  return (
    <>
      <div className={style.message}>
        <p>
          <i className="fas fa-exclamation-circle" id={style.i}>
            {" "}
            Remember to complete registration and fund withim 30 days to quality
            for our welcome bonus
          </i>
        </p>
      </div>
      <div className={style.message}>
        <p>
          <i className="fas fa-exclamation-circle" id={style.i}>
            {" "}
            Verify email adress Please make sure verify your email addres so we
            can contact you regarding your investments.
          </i>
        </p>
      </div>
    </>
  );
}
