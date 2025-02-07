import style from './Header.module.scss'

function SkeletonHeader() {
    return (
        <div className={style.skeletonBox}>
            <div className={style.skeletonInfoUser}>
                <div className={style.skeletonAvatar} />
                <div>
                    <div className={style.skeletonName} />
                    <div className={style.skeletonLvl} />
                </div>
            </div>
            <div className={style.skeletonBoxCoin}>
                <div className={style.skeletonCoin} />
                <div className={style.skeletonCoin} />
            </div>
        </div>
    )
}

export default SkeletonHeader