import s from "./Paginator.module.css";



export const Paginator = ({ pages, currentPage, onPageChanged }) => {
    return <div className={s.menuPages}>
        {pages.map((p, index) => {
            return (
                <span key={index} className={(currentPage === p && s.selectedPage).toString()} onClick={(e) => { onPageChanged(p) }}  >{p}</span>
            )
        })}
    </div>
}

export default Paginator;