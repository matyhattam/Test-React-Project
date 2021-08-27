import { Link } from "react-router-dom";
import { useContext } from "react";


import style from './MainNavigation.module.css'
import FavoritesContext from "../store/favorites-context";

function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext)

    return <header className={style.header}>
        <div className={style.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorites <span className={style.badge}>{favoritesContext.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation
