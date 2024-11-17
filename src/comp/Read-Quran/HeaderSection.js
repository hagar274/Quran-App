function HeaderSection({nameSurah}){
    return(
        <div className="h-[95px] w-full flex justify-between items-center px-8 border-b border-gray-200">
        <h3 className="text-3xl font-bold text-teal-700">{nameSurah}</h3>
        <img src="speacker.png" alt="speacker" height={30} width={30} />
       </div>
    );
};

export default HeaderSection;