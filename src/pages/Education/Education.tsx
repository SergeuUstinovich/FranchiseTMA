import { useSelector } from "react-redux";
import { EducationList } from "../../components";
import style from "./Education.module.scss";
import { getAllVideo } from "../../providers/StoreProvider/selectors/getAllVidoe";

function Education() {
  const arrVideo = useSelector(getAllVideo);
  return (
    <div className={style.education}>
      {arrVideo && <EducationList arrs={arrVideo} />}
    </div>
  );
}

export default Education;
