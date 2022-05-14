import { useState } from "react";
import s from "./Paginator.module.css";



export const Paginator = ({ currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10 }) => {

    let pagesCount = (totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; pages.length < pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortioPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortioPageNumber = portionNumber * portionSize;

    return <div className={s.menuPages}>
        {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
        {pages
            .filter(p => p >= leftPortioPageNumber && p <= rightPortioPageNumber)
            .map((p, index) => {
                return (
                    <span key={index} className={(currentPage === p && s.selectedPage).toString()} onClick={(e) => { onPageChanged(p) }}  >{p}</span>
                )
            })}
        {portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
        }
    </div>
}

export default Paginator;