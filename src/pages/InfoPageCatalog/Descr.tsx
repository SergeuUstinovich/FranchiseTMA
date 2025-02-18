import style from "./DesctBlockLink.module.scss";

interface DescrProps {
  descr: string;
  span: string | number;
  isLink?: boolean;
  onClick?: () => void;
}

function Descr({ descr, span, isLink, onClick }: DescrProps) {
  return (
    <p className={style.descr}>
      {descr}: <span onClick={onClick} style={isLink ? {color: '#007AFF'} : {}} className={style.span}>{span}</span>
    </p>
  );
}

export default Descr;
