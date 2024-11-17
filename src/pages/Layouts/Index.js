import React, { useState } from 'react'
import LeftSection from '../../comp/Layout/LeftSection';
import ReadQuran from '../Read-Quran/Index';
import Bookmark from "../Bookmark/Index";
import Home from '../Home/Index';
// import { query } from '../../Data';
// import Setting from "../Setting/Index";


function Layouts() {
  const menus = [
    {
      name: "Home",
      page: <Home />
    },
  {
    name: "Read Quran",
    page: <ReadQuran />
  },
  {
    name:"Bookmarks",
    page: <Bookmark />
   },
  // {
  //   name:"Settings",
  //   page: <Setting />
  // }
];
  const [selecedtPage, setSelecedtPage] = useState(menus[0]);
  
  // useEffect(() => {
  //   setSelecedtPage(menus[0]);
  // }, []);

  function onHandleClickMenu(menu){
    // console.log(menu);
    setSelecedtPage(menu);
  }

  // function quickSearch(value){
  //   if(value.length > 2) {
  //   setSelecedtPage(menus[1]);
  //   query.push(value);
  //   // console.log("Quick Search :", value);
  //   // localStorage.setItem("query", value);
  //   }
  //   else{
  //   setSelecedtPage(menus[0]);
  //   // localStorage.removeItem("query");
  //   query.forEach((data) => data.pop());
  //   }
  // }

  return (
    <div className='h-screen w-full flex'>
      {/* Left Section */}
      <LeftSection 
      menus={menus} 
      onHandleClickMenu={onHandleClickMenu} 
      selecedtPage={selecedtPage}
      // quickSearch={quickSearch}
      />

      {/* Reight Section */}
      <div className='h-full w-full'>
        {selecedtPage.page}
      </div>
    </div>
  );
}

export default Layouts;

