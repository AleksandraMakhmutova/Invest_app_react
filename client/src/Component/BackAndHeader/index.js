import React from "react";

import InfoLine from "../InfoLine";
import style from "./style.module.css";
import { Link } from "react-router-dom";
export default function BackAndHeader() {
  return (
    <>
      <InfoLine />
      <div className={style.cardHeader}>
        <div className={style.button}>
          <Link to="/Invest_app_react/dashboard">
            <div className={style.arrow}>
              <i class="fas fa-arrow-alt-circle-left"></i>
            </div>
            <div>Select your investion frame</div>{" "}
          </Link>
        </div>
        <div className={style.cardBackandHeader}>
          {" "}
          <h2>What would you do if the market takes a downturn?</h2>
        </div>
      </div>
    </>
  );
}
