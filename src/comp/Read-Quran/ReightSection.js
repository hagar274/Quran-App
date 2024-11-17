import React, { useEffect, useState } from "react";
import './ReightSection.css';
import Loading from "../Loading";
import HeaderSection from "./HeaderSection";
import ItemAyat from "../Shared/ItemAyat";
import { Utils } from "../../Utils";

function ReightSection({detailSurah, loadingDetail}){
    const [onBookmark, setOnBookmark] = useState({});
    
    function setBookmark(value){
        const bookmark = Utils.getBookmark();

        if(bookmark && bookmark['id'] === value.id) {
            // console.log(JSON.parse(bookmark)['id'], value.id);
            setOnBookmark({});
           return Utils.removeBookmark();
        }

        // localStorage.setItem('bookmark', JSON.stringify(value));
        Utils.setBookmark({ ...value, nameSurah: detailSurah.nama_latin });
        setOnBookmark({ ...value, nameSurah: detailSurah.nama_latin });

    }

    function isNotEmpty(){
        return Object.keys(detailSurah).length > 0;
    }

    useEffect(() => {
        const bookmark = Utils.getBookmark();
        if (bookmark) setOnBookmark(bookmark);
            // console.log(onBookmark);
        // console.log(bookmark);
    }, []);

    return(
        <div className="basis-3/4 flex flex-col surah">
        {
            loadingDetail ? <Loading /> : <></> }
            {isNotEmpty() ? (
                <>
                    <HeaderSection nameSurah={detailSurah.nama_latin}/>

                {/* List Ayat */}
                <div className="h-full w-full overflow-y-auto">
                    {detailSurah.ayat.map((data, index) => (
                        <ItemAyat 
                        key={index} 
                        data={data}
                        setBookmark={setBookmark}
                        onBookmark={onBookmark}
                        showIconBookmark={true}
                        />
                    ))}
                </div>    
                </>
                ) : (
                    <></>
            )}
            </div>   
    );
}


export default ReightSection;
