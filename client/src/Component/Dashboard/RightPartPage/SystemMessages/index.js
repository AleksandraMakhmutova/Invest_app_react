import React from "react";
import style from "./style.module.css";

export default function SystemMessages() {
  return (
    <>
      <div className={style.message}>
        <p>
          <i className="fas fa-exclamation-circle" id={style.i}>
            {" "}
            Закинуть сюда массив с сообщениями из редакса
          </i>
        </p>
      </div>
      <div className={style.message}>
        <p>
          <i className="fas fa-exclamation-circle" id={style.i}>
            {" "}
            Закинуть сюда массив с сообщениями из редакса Закинуть сюда массив с
            сообщениями из редакса Закинуть сюда массив с сообщениями из редакса
            Закинуть сюда массив с сообщениями из редакса
          </i>
        </p>
      </div>
    </>
  );
}
