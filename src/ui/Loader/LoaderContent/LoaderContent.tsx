import style from "./LoaderContent.module.scss";
import { classNames } from "../../../utils/classNames";

interface LoaderPageProps {
  className?: string
}

export const LoaderContent = ({className = ''}:LoaderPageProps) => (
  <div className={classNames(style.box, {}, [className])}>
    <span className={style.loader}></span>
    <p className={style.descr}>Загрузка</p>
  </div>
);
