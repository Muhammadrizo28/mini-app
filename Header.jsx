import style from '../style/addTasksBar.module.scss'
import { useState } from "react";
import { KeyboardFix } from '../hooks/KeyboardFix';

import xImage from '../images/x.png'
export function AddTasksBar({addTaskBar, setAddTaskBar}) {

  const [subTask, setSubTask] = useState([
    {}
  ]);

  <KeyboardFix/>


  return (
   
    <div className={style.mainDiv}>

      <header className={style.header}>
        <div><span>New Task</span></div>
        <div onClick={() => {setAddTaskBar(false)}}><img src={xImage} alt="" /></div>
      </header>

      <div className={style.container}>

        <input className={style.titleInput} type="text"/>
        <input className={style.descInput} type="text" />

        
        <div className={style.subtaskContainer}>
          <input className={style.subTaskInput1} type="text" /> <button onClick={() => {}} className={style.subTaskBtn}><span>+</span></button>
          <div className={style.subTask1}></div>

        </div>
      </div>
     
    </div>
   
  );
}