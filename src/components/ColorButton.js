const ColorButton = ({color, name, setColor}) => {
    return(
        <>
            <button onClick={()=>setColor(color)} className={`rounded-2xl w-32 p-2 ml-2 mt-3 ${color} `}>{name}</button>
        </>
    )
}

export default ColorButton;