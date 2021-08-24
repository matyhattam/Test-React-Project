import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);
    const favoriteMeetups = favoritesContext.favorites;

    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <p>There are no favorites Yet</p>
    }

    return <section>
        <h1>Favorite Meetups</h1>
        <MeetupList meetups={favoriteMeetups}></MeetupList>
    </section>
}

export default FavoritesPage;
