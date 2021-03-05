import React from "react";
import { Button } from "react-scroll";
import InfoLine from "../InfoLine";
import style from "./style.module.css";
export default function BackAndHeader() {
  return (
    <>
      <InfoLine />
      <div className={style.cardHeader}>
        <div className={style.button}>
          <div className={style.arrow}>
            <i class="fas fa-arrow-alt-circle-left"></i>
          </div>
          <div>Select your investion frame</div>
        </div>
        <div className={style.cardBackandHeader}>
          <h2>What would you do if the market takes a downturn?</h2>
        </div>
      </div>
    </>
  );
}
