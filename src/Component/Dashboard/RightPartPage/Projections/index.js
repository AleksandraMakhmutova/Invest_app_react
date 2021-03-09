import React from "react";
import style from "./style.module.css";
import { InputGroup, FormControl } from "react-bootstrap";
export default function Projections({ isOpen }) {
  return (
    <div className={isOpen ? style.progectionsOpen : style.closePart}>
      <div className={style.description}>
        Below is the income return your portfolio could achieve. You can change
        your projected returns by editing the initial investment or using the
        slider to adjust the level of risk. Once received in your portfolio,
        income is paid out to your nominated bank account at the beginning of
        the following month, unless you instruct us otherwise.
      </div>
      <div>
        <p> Initial investment</p>

        <InputGroup size="sm" className={`mb-3 ${style.input}`}>
          <FormControl
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
    </div>
  );
}
//    <InputGroup.Prepend>
//           <InputGroup.Text id="inputGroup-sizing-sm">
//             Initial investment
//           </InputGroup.Text>
//         </InputGroup.Prepend>
