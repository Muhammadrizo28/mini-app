import style from '../style/backMainPage.module.scss'
import { useContext } from 'react'
import { PageContext } from '../context/PageContext'
import arrowImg from '../images/right-arrow.png'

export function BackMainPage() {

    const {setPage} = useContext(PageContext)

    return (

        <header  className={style.pageHeader}>

            <div onClick={() => {setPage('TaskPage')}} className={style.mainDiv}>
                <img src={arrowImg} alt="" />
                <span>Back</span>
            </div>

        </header>
    )
    
}












