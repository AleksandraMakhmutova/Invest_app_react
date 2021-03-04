import React from "react";
import ItemQuestion from "./ItemQuestion";
import style from "./style.module.css";
export default function PageForm() {
  const questions = [
    "Sell all your portfolio",
    "Sell some of your portfolio",
    "Wait",
    "Buy more",
  ];

  return (
    <>
      <div className={style.questions}>
        {questions &&
          questions.map((el, i) => <ItemQuestion key={i + 25} info={el} />)}
      </div>
    </>
  );
}
