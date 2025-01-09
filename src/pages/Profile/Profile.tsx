import { InfoUser, ListPageUser, StatisticsUser } from '../../components'
import style from './Profile.module.scss'

function Profile() {
    return (
        <div className={style.profile}>
            <InfoUser />
            <StatisticsUser />
            <ListPageUser />
        </div>
    )
}

export default Profile