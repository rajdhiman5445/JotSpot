import { useState } from "react";
import Logo from "../files/logo_green.svg"
import LogoYellow from "../files/logo_yellow.svg"
import greenSearchIcon from "../files/search_green.svg"
import yellowSearchIcon from "../files/search_yellow.svg"
import showMore from "../files/show_more.gif"

const Header = () => {
    const [img, setImg] = useState(Logo)
    const [icon, setIcon] = useState(greenSearchIcon)

    return(
        <>
        <div class="mt-12 ml-10 flex justify-between mr-10 ">
            <div class="flex">
            <div className="title" class="w-36 cursor-pointer">
               <img src={img} onMouseEnter={()=>{
                setImg(LogoYellow)
               }}
               onMouseLeave={()=>{
                setImg(Logo)
               }}
               />
               
            </div>
            </div>
            
            <div class="flex">
            <button class="bg-[#0DBD79] rounded-2xl h-9 text-xs font-bold p-2 mr-3 hover:bg-[#FFDE59] cursor-pointer hover:text-green-800">Add Note</button>
            <div className="search_btn" class="w-9 cursor-pointer">
                <img src={icon} onMouseEnter={()=>{setIcon(yellowSearchIcon)}} onMouseLeave={()=>{setIcon(greenSearchIcon)}}/>
            </div>
            </div>
            
        </div>
        </>
    )
}

export default Header;