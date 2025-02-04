import { Button } from "../../ui/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import style from "./EducationList.module.scss";
import doneLesson from "../../assets/svg/doneLesson.svg";
import playLink from "../../assets/svg/playLink.svg";
import { LockLvlSvg } from "../../assets/svg";
import { AllVideoType } from "../../types/AllVideoType";
import useMutateAll from "../../utils/useMutateAll";
import { useEffect, useState } from "react";
import { useTelegram } from "../../providers/telegram/telegram";

interface EducationListProps {
  arrs: AllVideoType[];
}

export function EducationList({ arrs }: EducationListProps) {
  const { countVideoMutate } = useMutateAll();
  const [link, setLink] = useState<string>();
  const { tg } = useTelegram();

  const handleLink = (id: number, link: string) => {
    countVideoMutate.mutate({ id });
    setLink(link);
  };

  useEffect(() => {
    if (countVideoMutate.isSuccess) {
      tg.openLink(link);
    }
  }, [countVideoMutate.isSuccess]);

  return (
    <ul className={style.list}>
      {arrs.map((item, index) => (
        <li className={style.item} key={index}>
          <h2 className={style.title}>{item.title}</h2>
          <ProgressBar
            className={style.progressBar}
            progress={item.progress_bar}
            children={<p className={style.lvl}>{Math.round(item.progress_bar * 10) / 10}%</p>}
          />
          <ul className={style.listLesson}>
            {item.videos.map((lessons) => (
              <li className={style.itemLesson} key={lessons.id}>
                <div className={style.boxLesson}>
                  <h3
                    style={
                      !lessons.is_activate
                        ? {
                            color: "#a5a7a7",
                          }
                        : {}
                    }
                    className={style.titleLesson}
                  >
                    {lessons.name}{" "}
                    {lessons.watched && (
                      <span className={style.compliteSpan}>
                        <img src={doneLesson} alt="" />
                      </span>
                    )}
                  </h3>
                  <p
                    style={
                      !lessons.is_activate
                        ? {
                            color: "#a5a7a7",
                          }
                        : {}
                    }
                    className={style.descrLesson}
                  >
                    {lessons.description}
                  </p>
                </div>
                <Button
                  onClick={() => handleLink(lessons.id, lessons.link)}
                  isDisabled={!lessons.is_activate || countVideoMutate.isPending}
                  style={{ backgroundColor: "transparent" }}
                >
                  <a
                    style={
                      !lessons.is_activate
                        ? {
                            backgroundColor: "#262628",
                          }
                        : {}
                    }
                    className={style.btnLesson}
                    href={lessons.link}
                  >
                    {lessons.is_activate ? (
                      <img src={playLink} alt="" />
                    ) : (
                      <LockLvlSvg className={style.svgLock} />
                    )}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
          {item.progress_bar === 100 && (
            <Button className={style.btn}>Собрать награды</Button>
          )}
        </li>
      ))}
    </ul>
  );
}
