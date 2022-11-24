import React from 'react';

import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {links} from '../../public/data/dummy'
import Link from 'next/link';
import NavLink from './../NavLink';
import {useStateContext} from '../../context/contextProvider'

const Sidebar = () => {
    const {activeMenu, setActiveMenu, screenSize} = useStateContext();
    const handleCloseSidebar = () => {
        if(screenSize <= 900 && activeMenu){
            setActiveMenu(false);
        }
    }
    return (
            <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" >
                {activeMenu 
                && 
                <>
                    <div className="flex justify-between items-center">
                        <Link 
                            href="/" 
                            className="items-center flex gap-3 ml-3 text-xl mt-4 font-extrabold tracking-tight dark:text-white text-slate-900"
                            onClick={()=> handleCloseSidebar}
                        > 
                            <SiShopware/>
                            <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content="Menu" position="BottomCenter">
                            <button 
                                className="md:hidden text-xl p-3 rounded-full hover:bg-light-gray mt-4 block" 
                                type="button" 
                                onClick={()=> setActiveMenu(false)}
                            >
                                <MdOutlineCancel/>
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10">
                        {links.map(item => (
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 uppercase mt-4">
                                    {item.title}
                                </p>
                                {
                                    item.links.map(link => 
                                    <NavLink key={link.name} href={link.href} handleOnClick={handleCloseSidebar}>
                                        <span>{link.icon}</span>
                                        <p className="uppercase">{link.name}</p>
                                    </NavLink>    
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </> 
                } 
            </div>
    );
};

export default Sidebar;