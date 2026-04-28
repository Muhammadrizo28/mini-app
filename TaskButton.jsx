import style from '../style/sideMenu.module.scss'
import { useMenuSwiper } from "../hooks/menuSwiper";
import arrowPng from '../images/right-arrow.png'
import crownPng from '../images/crown.png'
import themeIconPng from '../images/themeIcon.png'
import bellPng from '../images/bell.png'
import settingPng from '../images/setting.png'
import { useEffect, useContext } from "react";

import { PageContext } from '../context/PageContext';




export function SideMenu({ sideMenu, setSideMenu }) {
  const {setPage} = useContext(PageContext)

  const {
    translate,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useMenuSwiper(() => setSideMenu(false));


  return (
    <div>





    <div  onClick={() => setSideMenu(false)}
      className={`${style.sideMenuOpen} ${sideMenu ? style.sideMenu : ""}`}
      
      >

    </div>

      <div 

      
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}

        style={{transform: `translateX(${sideMenu ? translate : -window.innerWidth + translate}px)`}}
        
        className={style.sideBar} onClick={(e) => e.stopPropagation()}>

        <div className={style.titleBox}>
          <span>Fledix</span>
          <span>Todo-list</span>
        </div>

        <div className={style.sideOptionBox}>

          <div onClick={() => {setPage('PremiumPage')}}> <span> <img className={style.leftImg} src={crownPng} alt="" /> Get pro</span><img src={arrowPng} alt="" /></div>
          <div onClick={() => {setPage('ThemePage')}}> <span> <img className={style.leftImg} src={themeIconPng} alt="" /> Theme</span><img src={arrowPng} alt="" /></div>
          <div onClick={() => {setPage('NotificationsPage')}}> <span> <img className={style.leftImg} src={bellPng} alt="" /> Notifications</span><img src={arrowPng} alt="" /></div>
          <div onClick={() => {setPage('SettingsPage')}}> <span> <img className={style.leftImg} src={settingPng} alt="" /> Settings</span><img src={arrowPng} alt="" /></div>

        </div>


        


      </div>
    </div>
  );
}