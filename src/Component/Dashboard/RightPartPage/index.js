import { useState } from "react";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Projections from "./Projections";
import style from "./style.module.css";
import SystemMessages from "./SystemMessages";


export default function RightPartPage() {
  const [overview, setOverwiew] = useState(true);
  const [projections, setProjections] = useState(false);
  const [allocation, setAllocation] = useState(false);
  function handleNav(choiseNav) {
    if (choiseNav == "overview") {
      setOverwiew(true);
      setProjections(false);
      setAllocation(false);
    } else if (choiseNav == "projections") {
      setProjections(true);
      setOverwiew(false);
      setAllocation(false);
    } else if (choiseNav == "allocation") {
      setAllocation(true);
      setOverwiew(false);
      setProjections(false);
    }
  }

  return (
    <div className={style.conteiner}>
      <SystemMessages />
      <Navigation handleNav={handleNav} />
      <Overview isOpen={overview} />
      <Projections isOpen={projections} />
    </div>
  );
}
