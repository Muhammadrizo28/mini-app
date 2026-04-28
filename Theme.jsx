import {BackMainPage} from '../components/BackMainPage.jsx'
import { BottomMenu } from '../components/BottomMenu.jsx'
import { Header } from '../components/Header.jsx'
import style from '../style/pages/chalanges.module.scss'

export function ChalangesPage() {

    return (
        <div className={style.mainDiv}>

            <Header/>
            <BottomMenu/>
            
         
        </div>
    )
}