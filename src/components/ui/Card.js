import style from './Card.module.css'

function Card(props) {
    // props.children allow us to pass props inside wrapping component witout
    // swallowing everything in the component
    return <div className={style.card}>{props.children}</div>

}

export default Card;
