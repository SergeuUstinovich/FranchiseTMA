import { ReactNode } from "react";
import { ArrowSvg } from "../../assets/svg";
import style from "./DesctBlockLink.module.scss";

interface BlockLinkProps {
  svg: ReactNode;
  title: string;
  link: string;
  mgBot: number
}

function BlockLink({ svg, title, link, mgBot }: BlockLinkProps) {
  return (
    <a style={{marginBottom: `${mgBot}px`}} className={style.link} href={link}>
      <div className={style.boxTitle}>
        <p className={style.img}>
          {svg}
        </p>
        <h3 className={style.title}>{title}</h3>
      </div>
      <ArrowSvg />
    </a>
  );
}

export default BlockLink;
