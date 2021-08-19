import {Route, Switch} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/MainNavigation"

function App() {
    return (
        <div>
            <MainNavigation></MainNavigation>
            <Switch>
                <Route path='/' exact>  {/* exact={true} */}
                    <AllMeetupsPage/>
                </Route>
                <Route path='/new-meetup'>
                    <NewMeetupsPage/>
                </Route>
                <Route path='/favorites'>
                    <FavoritesPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
