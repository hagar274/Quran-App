import { useEffect, useState } from "react";
import LeftSection from "../../comp/Read-Quran/LeftSection";
import ReightSection from "../../comp/Read-Quran/ReightSection";
import { QuranApi } from "../../services/Quran_api";
import Loading from "../../comp/Loading";


function ReadQuran() {

    const [listSurah, setListSurah] = useState([]);
    const [detailSurah, setDetailSurah] = useState({});
    const [loading, setLoading] = useState(true);
    const [loadingDetail, setLoadingDetail] = useState(false);


    useEffect(() => {
        getSurah();
    }, []);

    async function getSurah(){
        await QuranApi.getSurah().then(surah => {
            setListSurah(surah);
            setLoading(false);
        });
        // console.log(surah)
    }

    async function getDetailSurah(nomor){
        setLoadingDetail(true);
        setDetailSurah({});
        
        await QuranApi.getDetailSurah(nomor).then((detailSurah) => {
            setDetailSurah(detailSurah);
            setLoadingDetail(false);
        });
        // console.log(detailSurah);
    }

    return(
        <>
         <div className="flex w-full h-screen">
            {
                loading ? ( 
                <Loading /> 
            ) : (
                <>
            {/* Begian kiri*/}
                <LeftSection 
                listSurah={listSurah ?? []} 
                getDetailSurah={getDetailSurah} />

            {/* Begian kanan*/}
               <ReightSection 
               detailSurah={detailSurah ?? []} 
               loadingDetail={loadingDetail} />
               </>
            )}

         </div>
        </>
    );
};


export default ReadQuran;