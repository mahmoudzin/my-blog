import React, {useEffect} from 'react';
import {useStateContext} from '../../context/contextProvider'
import { AiOutlineMenu, AiOutlineAreaChart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../../public/data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '../';
import Image from 'next/image';

type NavButtonProps = {
    title: string,
    customeFunc(): void,
    icon: React.ReactElement,
    color: string,
    dotColor?:string
}

const NavButton = ({title, customeFunc, icon, color, dotColor}: NavButtonProps) => {
    return (
        <TooltipComponent content={title} position='BottomCenter'>
            <button 
                onClick={customeFunc} 
                style={{color}}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
            <span
                style={{ backgroundColor: dotColor || 'transparent' }}
                className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
            /> 
                {icon}
            </button>
        </TooltipComponent>
    )
}

const Navbar = () => {
    const {activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize} = useStateContext();
    
    useEffect(() => {
        const handeScreenSize = () => setScreenSize(window.innerWidth);
        
        window.addEventListener('resize', handeScreenSize)
        
        handeScreenSize();

        return () => window.removeEventListener('resize', handeScreenSize)
    }, 
    []);
    useEffect(()=>{
        if(screenSize <= 900)
            setActiveMenu(false);
        else
            setActiveMenu(true);
    }, [screenSize]);
    return (
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <div className="flex justify-between p-2 md:mx-6 relative">
                    <div className='flex'>
                        <NavButton 
                            title="Menu" 
                            customeFunc={()=> {setActiveMenu((prevActive) => !prevActive)}} 
                            icon={<AiOutlineMenu />}
                            color="blue"
                            dotColor=""
                        />
                        
                    </div >
                    <div className="flex">
                        <NavButton title="Cart" customeFunc={() => {handleClick('cart')}} color={'blue'} icon={<FiShoppingCart />} />
                        <NavButton title="Chat" dotColor="#03C9D7" customeFunc={() => {handleClick('chat')}} color={'blue'} icon={<BsChatLeft />} />
                        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customeFunc={() => {handleClick('notification')}} color={'blue'} icon={<RiNotification3Line />} />
                        <TooltipComponent content="Profile" position="BottomCenter">
                            <div
                                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                                onClick={() => {handleClick('userProfile')}}
                            >
                                <Image
                                    className="rounded-full w-8 h-8"
                                    src={avatar}
                                    alt="user-profile"
                                />
                                <p>
                                <span className="text-gray-400 text-14">Hi,</span>{' '}
                                <span className="text-gray-400 font-bold ml-1 text-14">
                                    Michael
                                </span>
                                </p>
                                <MdKeyboardArrowDown className="text-gray-400 text-14" />
                            </div>
                        </TooltipComponent>

                        {isClicked.cart && <Cart/> }
                        {isClicked.chat && <Chat/> }
                        {isClicked.userProfile && <UserProfile/> }
                        {isClicked.notification && <Notification/> }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;