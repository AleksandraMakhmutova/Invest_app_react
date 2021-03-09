import React from "react";
import style from "./style.module.css";
export default function LeftPartPage() {
  return (
    <div className={style.conteiner}>
      <h6>Personal account</h6>

      <div className={style.moneyConteiner}>
        <p>Name User</p>
        <p className={style.money}>100 000 $</p>
      </div>

      <h6 className={style.isa}>ISA</h6>
      <div className={style.btnConteiner1}>
        <p>Grown portfolio</p>
        <p>Find out more</p>
      </div>
      <div className={style.btnConteiner2}>
        <p>Income portfolio</p>
        <p>Find out more</p>
      </div>
      
    </div>
  );
}
