import React from "react";
import style from "./App.css";
import Header from "./Component/Header";

import PageForm from "./Component/PageForm";
import BackAndHeader from "./Component/BackAndHeader";
import MessagePart from "./Component/MessagePart";
import UnderContactsPart from "./Component/UnderContactsPart";
function App() {
  return (
    <>
      <div className={style.conteiner}>
        <Header />

        <BackAndHeader />
        <PageForm />
        <MessagePart />
        <UnderContactsPart />
      </div>
    </>
  );
}

export default App;
