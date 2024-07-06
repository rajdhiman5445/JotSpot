import { useState } from "react";
import Logo from "../files/logo_green.svg"
import LogoYellow from "../files/logo_yellow.svg"
import greenSearchIcon from "../files/search_green.svg"
import yellowSearchIcon from "../files/search_yellow.svg"
import { Link } from "react-router-dom";

const Header = () => {
    const [img, setImg] = useState(Logo)
    const [icon, setIcon] = useState(greenSearchIcon)

    return(
        <>
        <div className="mt-12 ml-10 flex justify-between mr-10 ">
            <div className="flex">
            <div className="w-36 cursor-pointer">
               <img src={img} onMouseEnter={()=>{
                setImg(LogoYellow)
               }}
               onMouseLeave={()=>{
                setImg(Logo)
               }}
               />
            </div>
            </div>
            
            <div className="flex">
            <Link to="/create"><button className="bg-[#0DBD79] rounded-2xl h-9 text-xs text-black font-bold p-2 mr-3 hover:bg-[#FFDE59] cursor-pointer hover:text-green-800">Add Note</button></Link>
            <Link to="/search"><div className="w-9 cursor-pointer">
                <img src={icon} onMouseEnter={()=>{setIcon(yellowSearchIcon)}} onMouseLeave={()=>{setIcon(greenSearchIcon)}}/>
            </div></Link>
            </div>
            
        </div>
        </>
    )
}

export default Header;