import { ReactNode } from "react";
import { ArrowSvg } from "../../assets/svg";
import style from "./DesctBlockLink.module.scss";
import { useTelegram } from "../../providers/telegram/telegram";
import { Button } from "../../ui/Button";

interface BlockLinkProps {
  svg: ReactNode;
  title: string;
  link: string;
  mgBot: number
}

function BlockLink({ svg, title, link, mgBot }: BlockLinkProps) {
  const {tg} = useTelegram()
  const handleLink = () => {
    tg.openLink(link)
  }
  return (
    <Button onClick={handleLink} style={{marginBottom: `${mgBot}px`}} className={style.link}>
      <div className={style.boxTitle}>
        <p className={style.img}>
          {svg}
        </p>
        <h3 className={style.title}>{title}</h3>
      </div>
      <ArrowSvg />
    </Button>
  );
}

export default BlockLink;
