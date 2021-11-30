import React, {useState} from 'react';
import Link from "next/link";
import headerData from "../data/header";
import header from "../data/header";
import {MoonIcon, SunIcon} from "../data/headerIcons";

const Header: React.FC = () => {

    const [darkMode, setDarkMode] = useState(true)

    const handleDarkMode = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setDarkMode(!darkMode)
    }

    return (
        <nav
            className=" bg-darkBg sticky top-0 z-30 flex justify-center items-center w-full border-b border-gray-800 font-sans">
            <div className="flex justify-between items-center p-4 text-white max-w-2xl w-full">
                <h1 className="font-bold text-2xl text-tertiary">{headerData.banner}</h1>
                <div className="flex items-center space-x-4 justify-evenly text-gray-400 font-semibold">
                    {
                        header.tabs.map((tab) => {
                            return (
                                <Link href={tab.path} key={tab.name}>
                                    <p className="cursor-pointer hover:bg-primary hover:text-white rounded-lg p-2">{tab.name}</p>
                                </Link>
                            )
                        })
                    }
                    <button className="rounded-md p-2 bg-gray-800" onClick={handleDarkMode}>
                        {darkMode ? <SunIcon/> : <MoonIcon/>}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;