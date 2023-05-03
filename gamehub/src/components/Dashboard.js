import Favourites from "./Favourites";
import GameShop from "./GameShop";
import MyGames from "./MyGames";

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){
    return(
        <>
        <MyGames/>
        <Favourites/>
        <GameShop/>
        </>
    )
}