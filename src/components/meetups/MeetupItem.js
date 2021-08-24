import { useContext } from "react";

import style from './MeetupItem.module.css'
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
    const favoritesContext = useContext(FavoritesContext)
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.id)

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.id);
        } else {
            favoritesContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            });
        }
    }

    return <li className={style.item}>
        <Card>
            <div className={style.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={style.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={style.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove' : 'Add to Favs'}</button>
            </div>
        </Card>
    </li>
}

export default MeetupItem;

