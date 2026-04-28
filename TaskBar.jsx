import { useContext } from "react";

import { PageContext } from '../context/PageContext';
import { SideMenuContext } from '../context/SideMenuContext';
import style from '../style/header.module.scss'
import menuImg from '../images/menu.png'
import { StreakButton } from "./StreakButton";
import { SideMenu } from "./SideMenu";

export function Header() {


    const { sideMenu, setSideMenu } = useContext(SideMenuContext);


    return (
        <div className={style.mainDiv}>
            
            <header className={style.header}>
                
                <div className={style.menuBtnBox}> 
                  <button onClick={() => {setSideMenu(true)}}  className={style.menuButton}>
                    <img src={menuImg} alt="" />
                  </button>
                </div>
        
                <div className={style.streakBtnBox}> 
                  <StreakButton/>
                </div>
            </header>

            <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
            

        </div>
    )
    
}