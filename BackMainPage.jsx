import { useEffect, useState, useContext } from "react";
import style from './style/main.module.scss'
import "./App.css";
import menuImg from './images/menu.png'
import { SideMenu } from "./components/SideMenu";
import { BottomMenu } from "./components/BottomMenu";
import { TaskButton } from "./components/TaskButton";

import { StreakButton } from "./components/StreakButton.jsx";
import { PageContext } from "./context/PageContext.jsx";
import { TaskBarContext } from "./context/TaskBarContext.jsx";


import {ChalangesPage} from './pages/Chalanges.jsx'
import {FocusPage} from './pages/Focus.jsx'
import {NotificationsPage} from './pages/Notifications.jsx'
import {PremiumPage} from './pages/Premium.jsx'
import {ProgressPage} from './pages/Progress.jsx'
import {SettingsPage} from './pages/Settings.jsx'
import {ThemePage} from './pages/Theme.jsx'


import { TaskBar } from "./components/TaskBar.jsx";
import { AddTasksBar } from "./components/AddTasksBar.jsx";
import { SideMenuContext } from "./context/SideMenuContext.jsx";
import { Header } from "./components/Header.jsx";
import { TaskPage } from "./pages/Tasks.jsx";



function App() {

  const { page } = useContext(PageContext);
  const { sideMenu, setSideMenu } = useContext(SideMenuContext);

  

  useEffect(() => {
    if (window?.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();

      console.log("USER:", tg.initDataUnsafe.user);
    } else {
      console.log("Открыто вне Telegram");
    }
  }, []);


  return (
    <div className={style.mainDiv}>

      {page == 'TaskPage' ? <TaskPage/>
      : page == 'ChalangesPage' ? <ChalangesPage/>
      : page == 'FocusPage' ? <FocusPage/>
      : page == 'NotificationsPage' ? <NotificationsPage/>
      : page == 'PremiumPage' ? <PremiumPage/>
      : page == 'ProgressPage' ? <ProgressPage/>
      : page == 'SettingsPage' ? <SettingsPage/>
      : page == 'ThemePage' ? <ThemePage/> 
      : null
    }

      
    </div>
  );
}

export default App;