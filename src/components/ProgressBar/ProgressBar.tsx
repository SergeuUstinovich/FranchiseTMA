import { ReactNode } from "react";
import style from "./ProgressBar.module.scss";
import { classNames } from "../../utils/classNames";

interface ProgressBarProps {
  progress: number;
  children: ReactNode;
  className?: string;
}

export function ProgressBar({
  progress,
  children,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={classNames(style.progressBar, {}, [className])}>
      <div
        className={style.progressBar__fill}
        style={{ width: `${progress}%` }}
      />
      <div className={style.children}>{children}</div>
    </div>
  );
}
