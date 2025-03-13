import { Button } from "../../ui/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import style from "./EducationList.module.scss";
import doneLesson from "../../assets/svg/doneLesson.svg";
import playLink from "../../assets/svg/playLink.svg";
import { LockLvlSvg } from "../../assets/svg";
import { AllVideoType, VideosType } from "../../types/AllVideoType";
import useMutateAll from "../../utils/useMutateAll";
import { useEffect, useState } from "react";
import { useTelegram } from "../../providers/telegram/telegram";
import silverImg from "../../assets/png/silverCoin.png";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import { SlidingInfoBonus } from "..";

interface EducationListProps {
  arrs: AllVideoType[];
}

export function EducationList({ arrs }: EducationListProps) {
  const { countVideoMutate, changeCurseMutate, compliteCurseMutate } =
    useMutateAll();

  const [link, setLink] = useState<string>();
  const { tg } = useTelegram();
  const [isOpen, setIsOpen] = useState(false);
  const [lessons, setLessons] = useState<VideosType | undefined>();

  const handleLink = (id: number, link: string) => {
    countVideoMutate.mutate({ id });
    setLink(link);
  };

  useEffect(() => {
    if (countVideoMutate.isSuccess) {
      tg.openLink(link);
    }
  }, [countVideoMutate.isSuccess]);

  const handleLinkRoute = (link: string) => {
    tg.openLink(link);
  };

  const handleCanTake = (id: number, link: string) => {
    changeCurseMutate.mutate({ id });
    setLink(link);
  };

  const handleTakeBonus = (id: number) => {
    compliteCurseMutate.mutate({ id });
  };

  const handleOpenSlide = (id: number) => {
    let foundLesson = null;
    for (const item of arrs) {
      foundLesson = item.videos.find((video) => video.video_id === id);
      if (foundLesson) break;
    }

    if (foundLesson) {
      setLessons(foundLesson);
      foundLesson = null;
    }

    setIsOpen(true);
  };

  const handleCloseSlide = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (changeCurseMutate.isSuccess) {
      tg.openLink(link);
    }
  }, [changeCurseMutate.isSuccess]);

  return (
    <>
      <ul className={style.list}>
        {arrs.map((item) => (
          <li className={style.item} key={item.curse_video_id}>
            <h2 className={style.title}>{item.title}</h2>
            <ProgressBar
              className={style.progressBar}
              progress={item.progress_bar}
              children={
                <p className={style.lvl}>
                  {Math.round(item.progress_bar * 10) / 10}%
                </p>
              }
            />
            <ul className={style.listLesson}>
              {item.videos.map((lessons) => (
                <li className={style.itemLesson} key={lessons.video_id}>
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
                  <div className={style.boxBtn}>
                    {lessons.can_take_bonus && !lessons.take_bonus && (
                      <Button
                        onClick={() => handleOpenSlide(lessons.video_id)}
                        className={style.btnBonus}
                      >
                        <img
                          className={style.imgBonus}
                          src={silverImg}
                          alt=""
                        />
                      </Button>
                    )}
                    <Button
                      onClick={
                        !lessons.watched
                          ? () => handleLink(lessons.video_id, lessons.link)
                          : () => handleLinkRoute(lessons.link)
                      }
                      isDisabled={!lessons.is_activate}
                      isLoading={countVideoMutate.isPending}
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div
                        style={
                          !lessons.is_activate
                            ? {
                                backgroundColor: "#262628",
                              }
                            : {}
                        }
                        className={style.btnLesson}
                        // href={lessons.link}
                      >
                        {lessons.is_activate ? (
                          <img src={playLink} alt="" />
                        ) : (
                          <LockLvlSvg className={style.svgLock} />
                        )}
                      </div>
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            {item.progress_bar === 100 && !item.can_take && (
              <Button
                onClick={() =>
                  handleCanTake(item.curse_video_id, item.url_link_preza)
                }
                className={style.btn}
                isLoading={changeCurseMutate.isPending}
              >
                Пройти тест
              </Button>
            )}
            {item.can_take && item.progress_bar === 100 && (
              <Button
                onClick={() => handleTakeBonus(item.curse_video_id)}
                isLoading={compliteCurseMutate.isPending}
                isDisabled={compliteCurseMutate.isPending || item.take_away}
                className={style.btn}
              > 
                {item.take_away ? 'Награда получена!' : 'Забрать награду'}
              </Button>
            )}
          </li>
        ))}
      </ul>
      <SlidingPanel
        isOpen={isOpen}
        onClose={handleCloseSlide}
        lazy
      >
        {lessons && (
          <SlidingInfoBonus
            onClose={handleCloseSlide}
            silver_coin={lessons.silver_coin}
            gold_coin={lessons.gold_coin}
            exp={lessons.exp}
            id={lessons.video_id}
            title={lessons.description}
          />
        )}
      </SlidingPanel>
    </>
  );
}
