import { useState } from "react";
import ListSurah from "./ListSearch";
import InputSearch from "./InputSearch";
// import { query } from "../../Data";


function LeftSection({listSurah, getDetailSurah}){
    const [search, setSearch] = useState("");
    const [listSurahBarv, setListSurahBarv] = useState([]);

    function onChangeHandler(e){
        e.preventDefault();
        setSearch(e.target.value);
        // console.log(search);

        if(search.length > 2){
            const listSurahTemp = listSurah.filter((surah) =>
                surah.nama_latin.toLowerCase().includes(search.toLowerCase())
        );
            setListSurahBarv(listSurahTemp)
        }
        // console.log(listSurahBarv)
    }

    // useEffect(() => {
    //     // const query = localStorage.getItem("query");
    //     // console.log(query.length, query);
    //     const queryValue = query[0];
    //     if(query.length > 2) setSearch(query[query.length]);
    //     // console.log(query);
    // });

    return(
        <>
        <div className="bg-white basis-1/4 flex flex-col">
        {/* TextField search */}
        <InputSearch value={search} onChange={onChangeHandler} />

        {/* List Name search */}

        {
            listSurah.length > 0 ? (
            <ListSurah listSurah={search.length > 2 ? listSurahBarv : listSurah} 
              getDetailSurah={getDetailSurah}/>
            ) : (
                <div className="h-full w-full flex justify-center items-center">
                    No Content
                </div>
            )}
        </div>
        </>
    );
};

export default LeftSection;
