import LeftPartPage from "./LeftPartPage";
import RightPartPage from "./RightPartPage";
import style from "./style.module.css";
export default function Dashboard() {
  return (
    <div className={style.conteiner}>
      <LeftPartPage />
      <RightPartPage />
    </div>
  );
}
