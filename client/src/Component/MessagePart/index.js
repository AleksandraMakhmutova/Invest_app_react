import React from "react";
import style from "./style.module.css";
export default function MessagePart() {
  return (
    <div className={style.messagePart}>
      <div className={style.inConteiner}>
        <div>
          <i className="fas fa-envelope-square"></i>
        </div>
        <div>
          <h4>mail@invest.com</h4>
        </div>
      </div>
      <div className={style.inConteiner}>
        <div>
          <i className="fas fa-phone-square-alt"></i>
        </div>
        <div>
          <h4>0808 80805236 or +7 956 9585858</h4>
        </div>
      </div>
      <div className={style.inConteiner}>
        Our support team is available Monday‑Friday 9:00 am to 5:00 pm
      </div>

      <div className={style.button}>
        <button className={style.glowOnHover} type="button">
          <i class="far fa-envelope"></i> Send us a message
        </button>
      </div>
    </div>
  );
}
