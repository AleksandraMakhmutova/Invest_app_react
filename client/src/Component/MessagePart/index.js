import React, { useState } from "react";
import MeaasageModal from "./MeaasageModal";
import style from "./style.module.css";
export default function MessagePart() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className={style.messagePart}>
        <div className={style.inConteiner}>
          <div>
            <i className="fas fa-envelope-square fa-2x">
              <small>mail@invest.com</small>
            </i>
          </div>
        </div>
        <div className={style.inConteiner}>
          <div>
            <i className="fas fa-phone-square-alt fa-2x">
              <small>0808 80805236 or +7 956 9585858</small>
            </i>
          </div>
        </div>
        <div className={style.inConteiner} id={style.text}>
          Our support team is available Monday‑Friday 9:00 am to 5:00 pm
        </div>

        <div className={style.button}>
          <button
            className={style.glowOnHover}
            type="button"
            onClick={() => setModalShow(true)}
          >
            <i class="far fa-envelope"></i>{" "}
            <h6 className={style.textBtn}>Send us a message</h6>
          </button>
        </div>
      </div>

      <MeaasageModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
