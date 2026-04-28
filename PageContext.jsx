import style from '../style/streakBtn.module.scss'
import fireStreak from '../images/fireStreak.svg'
import { useContext, useState, useRef, useEffect } from "react";
import { StreakContext } from "../context/StreakContext.jsx";
import fireGif from '../images/Fire.gif'

export function StreakButton() {
  const { streak } = useContext(StreakContext);

  const [show, setShow] = useState(false);
  const [gifKey, setGifKey] = useState(0);

  const ref = useRef(null);

  const [isFire, setIsFire] = useState(false);

    const handleClick = () => {
        setGifKey(prev => prev + 1); // 🔥 всегда новый ключ
        setIsFire(true);

        setTimeout(() => {
          setIsFire(false);
        }, 1300);
    };

  // закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const message =
    streak < 1
      ? "Begin your streak! ⚔️"
      : streak === 1
      ? `Day ${streak} starts now — stay sharp! 🙌`
      : `You're on ${streak} day streak — keep it up! 🎉`;

  return (
    <div className={style.back} ref={ref}>

      {/* bubble */}
      {show && (
        <div className={style.streakPromptBox}>
          {message}
        </div>
      )}

      <button className={style.fireButton}>
        <span
          className={
            streak < 10
              ? style.streakText1
              : streak < 30
              ? style.streakText2
              : streak < 100
              ? style.streakText3
              : streak < 300
              ? style.streakText4
              : streak < 365
              ? style.streakText6
              : style.streakText7
          }
        >
          {streak}
        </span>

       <img
            key={gifKey} // 💥 всегда новый → GIF перезапускается
            src={isFire ? fireGif : fireStreak}
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              setShow(prev => !prev);
              handleClick();
            }}
        />
      </button>

    </div>
  );
}