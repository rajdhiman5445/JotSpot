import Filters from "./Filters";
import Body from "./Body";
import noNotes from "../files/no_notes.gif"


const Home = ({notes, setNotes}) => {
    if(notes.length === 0){
        return(
            <>
            <Filters notes={notes} setNotes={setNotes}/>
            <div className="flex justify-center items-center h-full">
            <img src={noNotes} className="w-60 mt-20"/>
            </div>
            </>
        )
    }else{
    return(
        <>
            <Filters notes={notes} setNotes={setNotes}/>
            <Body notes={notes}/>

        </>
    )
}
}

export default Home;