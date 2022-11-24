import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type NavLinkProps = {
    href: string,
    children?: React.ReactNode;
    handleOnClick():void;
}

const NavLink = ({ href, children, handleOnClick }:NavLinkProps) => {
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m2'
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 text-md m2'
    const router = useRouter();
    let className;
    if (router.pathname === href) 
        className = activeLink;
    else 
        className = normalLink; 

    return <Link className={className} href={href} onClick={handleOnClick}>{children}</Link>
}

export default NavLink;