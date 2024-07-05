import { Link } from "react-router-dom";

const Card = ({id, color, title, date}) => {
    return(
        <>
            <Link to={`/edit/${id}`}>
            <div className={`w-32 h-48 ${color} rounded-2xl ml-4 mt-4 relative`}>
                <h2 className="bg-transparent p-4 text-xl leading-5 ">{title}</h2>
                <p className="bg-transparent p-4 text-sm absolute bottom-0 left-0 ">{date}</p>
            </div>
            </Link>
        </>
    )
}

export default Card;