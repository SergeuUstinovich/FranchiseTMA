import { Button } from "../../ui/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import style from "./EducationList.module.scss";
import doneLesson from "../../assets/svg/doneLesson.svg";
import playLink from "../../assets/svg/playLink.svg";
import { LockLvlSvg } from "../../assets/svg";

interface Lesson {
  name: string;
  descr: string;
  id: string;
  isComplete: boolean;
  isActive: boolean;
  link: string;
}
interface Course {
  title: string;
  id: string;
  idPerson: string;
  progressBar: number;
  listLessons: Lesson[];
}

interface EducationListProps {
  arrs: Course[];
}

export function EducationList({ arrs }: EducationListProps) {
  return (
    <ul className={style.list}>
      {arrs.map((item) => (
        <li className={style.item} key={item.id}>
          <h2 className={style.title}>{item.title}</h2>
          <ProgressBar
            className={style.progressBar}
            progress={item.progressBar}
            children={<p className={style.lvl}>{item.progressBar}%</p>}
          />
          <ul className={style.listLesson}>
            {item.listLessons.map((lessons) => (
              <li className={style.itemLesson} key={lessons.id}>
                <div className={style.boxLesson}>
                  <h3
                    style={
                      !lessons.isActive
                        ? {
                            color: "#a5a7a7",
                          }
                        : {}
                    }
                    className={style.titleLesson}
                  >
                    {lessons.name}{" "}
                    {lessons.isComplete && (
                      <span className={style.compliteSpan}>
                        <img src={doneLesson} alt="" />
                      </span>
                    )}
                  </h3>
                  <p
                    style={
                      !lessons.isActive
                        ? {
                            color: "#a5a7a7",
                          }
                        : {}
                    }
                    className={style.descrLesson}
                  >
                    {lessons.descr}
                  </p>
                </div>
                <Button
                  isDisabled={!lessons.isActive}
                  style={{ backgroundColor: "transparent" }}
                >
                  <a
                    style={
                      !lessons.isActive
                        ? {
                            backgroundColor: "#262628",
                          }
                        : {}
                    }
                    className={style.btnLesson}
                    href={lessons.link}
                  >
                    {lessons.isActive ? (
                      <img src={playLink} alt="" />
                    ) : (
                      <LockLvlSvg className={style.svgLock} />
                    )}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
          {item.progressBar === 100 && (
            <Button className={style.btn}>Собрать награды</Button>
          )}
        </li>
      ))}
    </ul>
  );
}
