import React, {createContext, useContext, useState} from 'react';


interface IState{
    'chat': boolean,
    'cart': boolean,
    'notification': boolean,
    'userProfile': boolean,
}

export interface contextType {
    activeMenu: boolean,
    isClicked: IState | {[key:string]: boolean},
    setActiveMenu(a:boolean | Function): void,
    handleClick(clicked:string): void,
    screenSize: number
    setScreenSize(x:number):void
}
const initialState:{[key:string]: boolean} | IState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

export const StateContext = createContext<contextType | null>(null);

type ContextProviderProps = {
    children: React.ReactNode
}

const ContextProvider = ({children}: ContextProviderProps)=>  {
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<{[key:string]: boolean} | IState>(initialState);
    const [screenSize, setScreenSize] = useState<number>(0)
    const handleClick = (clicked:string) => setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}
        
export const useStateContext = () => useContext(StateContext);
export default ContextProvider