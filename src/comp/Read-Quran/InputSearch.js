function InputSearch({value, onChange}){
    return(
        <>
        <div className="bg-gray-500 w-full h-24 flex justify-center items-center">
                  <form className="d-flex bg-white w-full mx-4 rounded-xl py-1 px-8 relative">
        <input className="form-control h-full w-full py-2 ml-4" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(e) => onChange(e)} />
        <button className="btn btn-outline-success" type="submit"><img
             src='search.png' 
             alt='search icon' 
             width={20}
             height={20} />
             </button>
      </form>
        </div>
        </>
    );
}

export default InputSearch;