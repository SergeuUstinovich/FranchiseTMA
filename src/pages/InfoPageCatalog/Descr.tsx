import style from "./DesctBlockLink.module.scss";

interface DescrProps {
  descr: string;
  span: string | number;
}

function Descr({ descr, span }: DescrProps) {
  return (
    <p className={style.descr}>
      {descr}: <span className={style.span}>{span}</span>
    </p>
  );
}

export default Descr;
