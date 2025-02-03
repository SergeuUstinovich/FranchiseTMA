import { EducationList } from '../../components'
import style from './Education.module.scss'

const educationArr = [
    {
        title: 'Основы успешного ведения франшизы',
        id: '1',
        idPerson: '1',
        progressBar: 60,
        listLessons: [
            {
                name: 'Урок 1',
                descr: 'Основы франчайзинга',
                id: '4',
                isComplete: true,
                isActive: true,
                link: ''
            },
            {
                name: 'Урок 2',
                descr: 'Основы франчайзинга',
                id: '8',
                isComplete: false,
                isActive: true,
                link: ''
            },{
                name: 'Урок 3',
                descr: 'Основы франчайзинга',
                id: '34',
                isComplete: false,
                isActive: false,
                link: ''
            }
        ]
    }, 
    {
        title: 'Основы успешного ведения франшизы',
        id: '2',
        idPerson: '2',
        progressBar: 40,
        listLessons: [
            {
                name: 'урок1',
                descr: '',
                id: '',
                isComplete: false,
                isActive: true,
                link: ''
            }
        ]
    }
]

function Education() {
    return (
        <div className={style.education}>
            <EducationList arrs={educationArr} />
        </div>
    )
}

export default Education