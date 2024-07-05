const Filters = () => {
    return(
        <div class="flex ml-10 mr-10 mt-10 justify-between">
            <div className="Notes-Filter" class="flex">
                <button class="text-[#0DBD79] mr-2 cursor-pointer active:font-extrabold">All Notes</button>
                <div class="text-[#0DBD79] cursor-none"> | </div>
                <div class="text-[#0DBD79] ml-2 cursor-pointer active:font-extrabold">Favorite Notes</div>
            </div>
            <div className="Type-Filter" class="flex">
                <button class="text-[#0DBD79] mr-2 cursor-pointer">Date Modified</button>
                <div class="text-[#0DBD79] cursor-none"> | </div>
                <div class="text-[#0DBD79] ml-2 cursor-pointer">↓</div>
            </div>

        </div>
    )
}

export default Filters;