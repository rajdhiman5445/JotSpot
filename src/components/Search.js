import { useState, useEffect } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Load from "../files/search.gif"
import Logo from "../files/logo.svg"

const Search = ({notes}) => {
    const navigate = useNavigate();
    const [searched, setSearched] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
    const handleKeyDown = (event) => {
        if (event.key == 'Enter'){
            if(searched !== ""){
                const newNotes = notes.filter(item => item.title.toLowerCase().includes(searched.toLowerCase()) || item.content.toLowerCase().includes(searched.toLowerCase()))
                setSearchResult(newNotes)
            }else{
                setSearchResult([])
            }
        }
    }

    useEffect(()=>{
        setSearchResult([])
    }, [])

    return(
        <>
        <div className="flex justify-evenly">
            <img onClick={()=>navigate("/")} src={Logo} className="w-14 mt-6 ml-2 cursor-pointer" />
            <input type="text" onKeyDown={handleKeyDown} value={searched} onChange={(e) => {setSearched(e.target.value)}} autoFocus className="w-10/12 h-14 text-xl p-2 mt-6 ml-2 border-2 rounded-xl border-[#0DBD79] focus:border-[#0DBD79] focus:outline-none" />
            <div onClick={()=>navigate("/")} className="mt-9 ml-2 mr-3 text-3xl text-[#0DBD79] cursor-pointer">X</div>
        </div>
        <div>
        {(searchResult.length)?(
            <div className="flex flex-wrap justify-items-start ml-10 mr-8 mt-4">
            {searchResult.map(item => 
                <Card key={item.id} id={item.id} color={item.color} title={item.title} date={item.date} />
            )}
            </div>
            ):<div className="flex justify-center items-center mt-14 h-full"><img src={Load} className="w-96" /></div>}

        </div>
        <Footer/>
        </>
    )
}

export default Search;