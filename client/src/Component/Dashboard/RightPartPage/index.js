import Navigation from "../Navigation";
import style from "./style.module.css";
import SystemMessages from "./SystemMessages";
export default function RightPartPage() {
  return (
    <div className={style.conteiner}>
      <SystemMessages />
      <Navigation />
    </div>
  );
}
