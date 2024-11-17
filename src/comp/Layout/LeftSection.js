import React from 'react'
import LogoSection from './LogoSection';
import MenuSection from './MenuSection';
// import QuickSearchSection from './QuickSearchSection';

function LeftSection({menus, onHandleClickMenu, selecedtPage}) {
  return (
    <div className='bg-teal-700 h-full basis-1/5 flex flex-col pt-4 px-4 items-center'>
    {/* Logo Section */}
       <LogoSection onHandleClickMenu={onHandleClickMenu} menu={menus[0]} />

       {/* Menu Section */}
       <MenuSection 
       menus={menus} 
       onHandleClickMenu={onHandleClickMenu} 
       selecedtPage={selecedtPage} />

       {/* Quick search Section */}
       {/* <QuickSearchSection quickSearch={quickSearch} /> */}
    </div>
  );
}

export default LeftSection;