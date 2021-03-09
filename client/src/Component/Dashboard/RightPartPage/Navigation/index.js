import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import style from "./style.module.css";

export default function Navigation({ handleNav }) {
  const handleChose = (e) => {
    e.preventDefault();
    const target = e.target.id;
    handleNav(target);
  };

  return (
    <>
      <div className={style.navigation}>
        <div>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" onClick={handleChose} id="overview">
                Overview
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                id="projections"
                onClick={handleChose}
              >
                Projections
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" id="allocation" onClick={handleChose}>
                Allocation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item></Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
}
