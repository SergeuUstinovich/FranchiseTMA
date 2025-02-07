import { useSelector } from "react-redux";
import style from "./StatisticsUser.module.scss";
import { getProfileStata } from "../../providers/StoreProvider/selectors/getProfile";
import { LoaderButton } from "../../ui/Loader/LoaderButton";

export function StatisticsUser() {
  const stata = useSelector(getProfileStata);
  return (
    <div className={style.box}>
      <h2 className={style.title}>Статистика</h2>
      <div className={style.boxStat}>
        <p className={style.descr}>
          Пройдено уроков:{" "}
          {stata ? (
            <span className={style.span}>{stata.completed_lessons}</span>
          ) : (
            <LoaderButton className={style.loader} />
          )}
        </p>
        <p className={style.descr}>
          Количество проданных франшиз:{" "}
          {stata ? (
            <span className={style.span}>
              {stata.count_of_selling_franchise}
            </span>
          ) : (
            <LoaderButton className={style.loader} />
          )}
        </p>
        <p className={style.descr}>
          Количество регистраций:{" "}
          {stata ? (
            <span className={style.span}>{stata.count_of_registration}</span>
          ) : (
            <LoaderButton className={style.loader} />
          )}
        </p>
      </div>
    </div>
  );
}
