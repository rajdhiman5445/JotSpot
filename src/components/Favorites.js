import FavFilters from "./FavFilters";
import Body from "./Body";
import noNotes from "../files/no_notes.gif"


const Favorites = ({notes, setNotes}) => {
    const newNotes = notes.filter(item => item.favorite === true);
    console.log(newNotes);
    if(newNotes.length === 0){
        return(
            <>
            <FavFilters notes={notes} setNotes={setNotes}/>
            <div className="flex justify-center items-center h-full">
            <img src={noNotes} className="w-60 mt-20"/>
            </div>
            </>
        )
    }
    else{
    return(
        <>
            <FavFilters/>
            <Body notes={newNotes}/>

        </>
    )
}
}

export default Favorites;