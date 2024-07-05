import ColorButton from "./ColorButton";

const Color = ({setColor}) => {
    return(
        <>
            <div className="flex overflow-y-scroll justify-evenly ml-2 mr-2">
                <ColorButton color="bg-zinc-600" name="Gray" setColor={setColor}/>
                <ColorButton color="bg-red-600" name="Red" setColor={setColor}/>
                <ColorButton color="bg-yellow-600" name="Yellow" setColor={setColor}/>
                <ColorButton color="bg-amber-900" name="Amber" setColor={setColor}/>
                <ColorButton color="bg-orange-600" name="Orange" setColor={setColor}/>
                <ColorButton color="bg-lime-900" name="Lime" setColor={setColor}/>
                <ColorButton color="bg-green-800" name="Green" setColor={setColor}/>
                <ColorButton color="bg-cyan-900" name="Cyan" setColor={setColor}/>
                <ColorButton color="bg-blue-950" name="Blue" setColor={setColor}/>
                <ColorButton color="bg-violet-950" name="Violet" setColor={setColor}/>
                <ColorButton color="bg-rose-950" name="Rose" setColor={setColor}/>
                <ColorButton color="bg-gray-950" name="Black" setColor={setColor}/>


            </div>
        </>
    )
}

export default Color;