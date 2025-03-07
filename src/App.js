import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import style from "./App.css";

import Header from "./Component/Header";
import PageForm from "./Component/PageForm";
import BackAndHeader from "./Component/BackAndHeader";
import MessagePart from "./Component/MessagePart";
import UnderContactsPart from "./Component/UnderContactsPart";
import Dashboard from "./Component/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className={style.conteiner}>
          <Header />
          <Switch>
            <Route path="/questions">
              <BackAndHeader />
              <PageForm />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
          <MessagePart />
          <UnderContactsPart />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
