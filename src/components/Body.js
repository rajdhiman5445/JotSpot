import Card from "./Card";

const Body = ({notes}) => {
   
    return(
        <>
        <div className="flex flex-wrap justify-items-start ml-10 mr-8 mt-4">
        {notes.map(item => 
            <Card key={item.id} id={item.id} color={item.color} title={item.title} date={item.date} />
        )}
        </div>
        
        </>
    )
}

export default Body;