import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavFilters = ({notes, setNotes}) => {
    
    const [reversed, setReversed] = useState(JSON.parse(localStorage.getItem('order')) || false);

    return(
        <div className="flex ml-10 mr-10 mt-10 justify-between">
            <div className="flex">
                <Link to="/"><button className="text-[#0DBD79] mr-2 cursor-pointer ">All Notes</button></Link>
                <div className="text-[#0DBD79] cursor-none"> | </div>
                <Link to="/favorites"><div className="text-[#0DBD79] ml-2 cursor-pointer font-extrabold">Favorite Notes</div></Link>
            </div>
            <div className="flex">
                <button className="text-[#0DBD79] mr-2 cursor-pointer">Date Modified</button>
                <div className="text-[#0DBD79] cursor-none"> | </div>
                <div onClick={()=>{setNotes(prev => [...prev].reverse()); setReversed(prev => !prev); localStorage.setItem('order', JSON.stringify(reversed))}} className="text-[#0DBD79] ml-2 font-extrabold cursor-pointer">{`${reversed?"↑":"↓"}`}</div>
            </div>

        </div>
    )
}

export default FavFilters;