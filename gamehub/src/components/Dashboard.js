import Favourites from "./Favourites";
import GameShop from "./GameShop";
import MyGames from "./MyGames";

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){
    return(
        <>
       <button className="button"><MyGames/></button> 
       <button className="button"><Favourites/></button> 
       <button className="button"><GameShop/></button> 
        </>
    )
}