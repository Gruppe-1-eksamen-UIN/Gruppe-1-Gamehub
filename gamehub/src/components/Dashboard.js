import Favourites from "./Favourites";
import GameShop from "./GameShop";
import MyGames from "./MyGames";
import SanityGames from "./SanityGames"

// Component for Dashboard som viser forsiden med mygames, favourites og gameshop
export default function Dashboard(){
    return(
        <>
        <div className="buttons">
       <button className="button"><MyGames/></button> 
       <button className="button"><Favourites/></button> 
       <button className="button"><GameShop/></button>
       </div> 
        </>
        
        

    )
}