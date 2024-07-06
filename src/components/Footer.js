import Logo from "../files/logo_green.svg"
import Git from "../files/github.png"
import { Link } from "react-router-dom"
import Tree from "../files/walking.gif"

const Footer = () => {
    return(
        <>
            <div className="relative mt-80">
            <div className="text-center min-h-36 bg-gray-950 p-6 text-green text-[#0DBD79]">
                <div className="flex justify-center item-center bg-gray-950">
                <img src={Logo} className="w-28 bg-gray-950 " />
                </div>
                <div className="absolute mt-7"><img src={Tree} className="w-20 bg-gray-950"/></div>
                <div className="bg-gray-950 flex justify-center item-center mt-5">
                    <Link to="https://github.com/rajdhiman5445/JotSpot" target="_blank" rel="noopener noreferrer"><img src={Git} className="w-6 bg-gray-950" /></Link>
                </div>
                <div className="bg-gray-950 mt-4">Made with 🍀 in India</div>
                
                
                </div>    
            </div>
        </>
    )
}

export default Footer;