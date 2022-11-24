import React, {createContext, useContext, useState} from 'react';


interface IState{
    chat: boolean,
    cart: boolean,
    notification: boolean,
    userProfile: boolean,
}

interface contextType {
    activeMenu: boolean,
    isActive: IState,
    setActiveMenu(): void,
    handleClick(clicked:string): void,
    screenSize: undefined | number
}
const initialState: IState = {
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
    const [isClicked, setIsClicked] = useState<IState>(initialState);
    const [screenSize, setScreenSize] = useState<undefined | number>(undefined)
    const handleClick = (clicked:string) => setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}
        
export const useStateContext = () => useContext(StateContext);
export default ContextProvider