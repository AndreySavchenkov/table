import React from "react";
import style from "../App.module.scss";

type PropsType = {
    callbackUp: () => void
    callbackDown: () => void
    name: string
}

export const ThDataComponent: React.FC<PropsType> = React.memo((props) => {
    return <>
        <th className={style.th}>
            <div className={style.sortArrayWrapper}>
                <div className={style.sortArray} onClick={props.callbackUp}>&#5169;</div>
            </div>
            <div className={style.textThead}>{props.name}</div>
            <div className={style.sortArrayWrapper}>
                <div className={style.sortArray} onClick={props.callbackDown}>&#5167;</div>
            </div>
        </th>
    </>
})