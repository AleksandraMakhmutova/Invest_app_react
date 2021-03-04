import React from "react";
import style from "./App.css";
import Header from "./Component/Header";

import PageForm from "./Component/PageForm";
import BackAndHeader from "./Component/BackAndHeader";
import MessagePart from "./Component/MessagePart";
function App() {
  return (
    <>
      <div className={style.conteiner}>
        <Header />

        <BackAndHeader />
        <PageForm />
        <MessagePart />
      </div>
    </>
  );
}

export default App;
