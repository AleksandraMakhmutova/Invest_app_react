import React from "react";
import { useSelector } from "react-redux";
import ItemQuestion from "./ItemQuestion";
import style from "./style.module.css";
export default function PageForm() {
  const questions = useSelector((store) => store.questions.questions);
  console.log(questions);
  return (
    <>
      <div className={style.questions}>
        {questions &&
          questions.map((el, i) => <ItemQuestion key={i + 25} info={el} />)}
      </div>
    </>
  );
}
