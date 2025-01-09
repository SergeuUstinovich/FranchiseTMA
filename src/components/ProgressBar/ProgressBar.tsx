import { ReactNode } from "react";
import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  progress: number;
  children: ReactNode;
}

export function ProgressBar({ progress, children }: ProgressBarProps) {
  return (
    <div className={style.progressBar}>
      <div
        className={style.progressBar__fill}
        style={{ width: `${progress}%` }}
      />
      <div className={style.children}>
        {children}
      </div>
    </div>
  );
}
