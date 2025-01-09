import style from './StatisticsUser.module.scss'

export function StatisticsUser() {
    return (
        <div className={style.box}>
            <h2 className={style.title}>Статистика</h2>
            <div className={style.boxStat}>
            <p className={style.descr}>Пройдено уроков: <span className={style.span}>4</span></p>
            <p className={style.descr}>Количество проданных франшиз: <span className={style.span}>10</span></p>
            </div>
        </div>
    )
}