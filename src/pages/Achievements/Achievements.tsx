import { useSelector } from "react-redux";
import { getAllAchivnets } from "../../providers/StoreProvider/selectors/getAllAchivnets";
import style from "./Achievements.module.scss";
import ImageContainer from "../../utils/ImageContainer";
import { getProfileUser } from "../../providers/StoreProvider/selectors/getProfile";
import { LockLvlSvg } from "../../assets/svg";
import { Navigate } from "react-router-dom";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

function Achievements() {
  const achievements = useSelector(getAllAchivnets);
  const profile = useSelector(getProfileUser);

  if (!profile) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={style.boxAchiv}>
      <h2 className={style.title}>Достижения</h2>
      <ul className={style.list}>
        {achievements &&
          achievements.map((item) => (
            <li className={style.item} key={item.id}>
              <div className={style.boxImg}>
                <ImageContainer
                  x1x16={true}
                  className={style.img}
                  src={`${api_url}${item.image.picture_url}`}
                />
                {profile.lvl < item.lvl && (
                  <div className={style.blockLvl}>
                    <div className={style.boxLvlOpen}>
                      <LockLvlSvg className={style.svgLock} />
                    </div>
                  </div>
                )}
              </div>
              <p
                style={
                  profile.lvl < item.lvl
                    ? {
                        opacity: "0.6",
                      }
                    : {}
                }
                className={style.descr}
              >
                {item.name}
              </p>
              <p
                style={
                  profile.lvl < item.lvl
                    ? {
                        opacity: "0.6",
                      }
                    : {}
                }
                className={style.descr}
              >
                {item.lvl} lvl
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Achievements;
