import React, { useState } from 'react';
import Navbar from './Navbar';
import Tooltip from '../ui/Tooltip';
import Sidebar from './Sidebar';
import {useStateContext} from '../../context/contextProvider'
type PropsType = {
    children?: React.ReactNode;
}
const Layout = ({children}:PropsType) => {
    const context = useStateContext();
    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <Tooltip/>
            {context?.activeMenu
            ?<div className="w-72 fixed sidebar dark:bg-secondry-dark-bg bg-white" style={{zIndex: '10000'}}><Sidebar/></div>
            :<div className="w-0"><Sidebar /></div> }
            
            <Navbar />
            <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                {children}
            </div>
        </div>
    );
};

export default Layout;