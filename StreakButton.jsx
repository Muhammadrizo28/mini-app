import style from '../style/btmMenu.module.scss'
import taskImg from '../images/tasks.png'
import progressImg from '../images/progress.png'
import clockImg from '../images/clock.png'
import fireImg from '../images/fire.png'
import { useContext } from 'react'

import { PageContext } from '../context/PageContext'



export function BottomMenu() {

  const {page, setPage} = useContext(PageContext)

  return (
    
    <div className={style.mainDiv}>

        <div className={page == 'TaskPage' ? style.iconColor : ''} onClick={() => {setPage('TaskPage')}}><img src={taskImg} alt="" /> <span>Tasks</span></div>
        <div className={page == 'ProgressPage' ? style.iconColor : ''} onClick={() => {setPage('ProgressPage')}}><img  src={progressImg} alt="" /> <span>Progress</span></div>
        <div className={page == 'FocusPage' ? style.iconColor : ''} onClick={() => {setPage('FocusPage')}}><img  src={clockImg} alt="" /> <span>Focus</span></div>
        <div className={page == 'ChalangesPage' ? style.iconColor : ''} onClick={() => {setPage('ChalangesPage')}}><img  src={fireImg} alt="" /> <span>Chalanges</span></div>

    </div>
  );
}