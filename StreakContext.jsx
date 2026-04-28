import style from '../style/taskButton.module.scss'
import plusImg from '../images/plus.png'

export function TaskButton({onClick}) {

    return (
        <div className={style.mainDiv}>
            <button onClick={onClick}>
                <img src={plusImg} alt="" />
            </button>
        </div>
    )
}