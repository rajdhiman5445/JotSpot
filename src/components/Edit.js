import { Link, useNavigate, useParams } from "react-router-dom";
import Logo from "../files/logo_green.svg"
import more from "../files/show_more.gif"
import less from "../files/show_less.gif"
import { useEffect, useState } from "react";
import useCurrentDate from "./useCurrentDate";
import Color from "./Color";


const Edit = ({notes, setNotes}) => {
    const {id} = useParams();
    const note = notes.find((item) => item.id === id);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const date = useCurrentDate();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [img, setImg] = useState(more);
    const [color, setColor] = useState(note.color);
    const [fav, setFav] = useState(note.favorite)

    useEffect(()=>{
        if(!visible){
            setImg(more);
        } else {
            setImg(less);
        }

    }, [visible])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && content){
            const newNote = {...note, title, content, date, color, favorite: fav}

            const newNotes = notes.map(item => {
                if(item.id === id){
                    item = newNote;
                }
                return item;
            })
            setNotes(newNotes);
        }
        navigate(-1);
    }

    const handleDelete = () => {
        const newNotes = notes.filter(item => item.id !== id)
        setNotes(newNotes);
        navigate("/");
    }
    
    return(
        <>
        <div className="flex justify-between">
        <div className="flex">
        <Link to="/"><div  className="w-28 cursor-pointer ml-2 mt-3">
               <img src={Logo} />
        </div></Link>
        <div><img src={img} onClick={() => setVisible(prev => !(prev))} className="show-more w-10 mt-2 ml-2 cursor-pointer" /></div>
        </div>
        <div>
        <Link to="/"><button className="bg-zinc-600 rounded-2xl h-9 text-base w-20 font-bold p-2 mr-2 mt-3  cursor-pointer ">Cancel</button></Link>
        <button onClick={handleSubmit} className="bg-[#0DBD79] rounded-2xl h-9 text-base w-16 font-bold p-2 mr-2 mt-3 hover:bg-[#FFDE59] cursor-pointer hover:text-green-800">Update</button>
        </div>
        </div>
        <div className={`${visible ? "more_btns" : "hidden"}`}>
        <div className="flex flex-wrap justify-start ml-2 mr-2">
            <button onClick={()=>{setFav(prev => !(prev))}} className="bg-orange-900 rounded-2xl w-44 h-9 text-base p-2 ml-2 mt-4 cursor-pointer flex-grow ">{`${fav ? "Remove From Favorite" : "Add To Favorite"}`}</button>
            <button onClick={handleDelete} className="bg-red-900 rounded-2xl w-44 h-9 text-base p-2 ml-2 mt-4 cursor-pointer flex-grow">Delete Note</button>
            <button className={`${color} rounded-2xl h-9 text-base p-2 ml-2 mt-4 cursor-pointer flex-grow`}>Current Icon Color</button>
            </div>
            <div className="colors"><Color setColor={setColor}/></div>
        
        </div>
        <form>
            <input type="text" placeholder="Enter Title Here" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full sm:w-11/12 h-12 sm:h-20 sm:ml-14  mt-4 sm:mt-10 text-3xl p-4 border-b-2 border-green-900 focus:border-green-500 focus:outline-none " />
            <textarea rows="50" placeholder="Add a little bit of body text" value={content} onChange={(e) => setContent(e.target.value)} className="w-full sm:w-11/12 mt-4 sm:mt-6 h-85 sm:h-100 text-xl rounded-2xl p-4 focus:outline-none sm:ml-14"></textarea>
            </form>
        </>
    )
}

export default Edit;