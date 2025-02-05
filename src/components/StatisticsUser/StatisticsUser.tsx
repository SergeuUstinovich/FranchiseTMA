import { useSelector } from "react-redux";
import style from "./StatisticsUser.module.scss";
import { getProfileStata } from "../../providers/StoreProvider/selectors/getProfile";

export function StatisticsUser() {
  const stata = useSelector(getProfileStata)
  return (
    <div className={style.box}>
      <h2 className={style.title}>Статистика</h2>
      <div className={style.boxStat}>
        <p className={style.descr}>
          Пройдено уроков: <span className={style.span}>{stata?.completed_lessons}</span>
        </p>
        <p className={style.descr}>
          Количество проданных франшиз: <span className={style.span}>{stata?.count_of_selling_franchise}</span>
        </p>
        <p className={style.descr}>
          Количество регистраций: <span className={style.span}>{stata?.count_of_registration}</span>
        </p>
      </div>
    </div>
  );
}
