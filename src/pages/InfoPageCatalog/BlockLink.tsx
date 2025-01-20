import { ArrowSvg } from "../../assets/svg";
import style from "./DesctBlockLink.module.scss";

interface BlockLinkProps {
  svg: string;
  title: string;
  link: string;
  mgBot: number
}

function BlockLink({ svg, title, link, mgBot }: BlockLinkProps) {
  return (
    <a style={{marginBottom: `${mgBot}px`}} className={style.link} href={link}>
      <div className={style.boxTitle}>
        <img className={style.img} src={svg} alt="" />
        <h3 className={style.title}>{title}</h3>
      </div>
      <ArrowSvg />
    </a>
  );
}

export default BlockLink;
