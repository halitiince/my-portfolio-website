import React from 'react';
import headerData from "../data/header";
import header from "../data/header";
import {SunIcon} from "../data/headerIcons";

const Header: React.FC = () => {
    return (
        <nav
            className="sticky top-0 z-30 flex justify-center items-center w-full border-b border-secondary font-sans bg-opacity-10">
            <div className="flex justify-between items-center p-4 text-white max-w-2xl w-full">
                <h1 className="font-bold text-2xl text-tertiary">{headerData.banner}</h1>
                <div className="flex items-center space-x-4 justify-evenly text-gray-400 font-semibold">
                    {
                        header.tabs.map((tab) => {
                            return (
                                <a
                                    key={tab.name}
                                    href={tab.path}
                                    className="cursor-pointer hover:bg-primary hover:text-white rounded-lg p-2">
                                    {tab.name}
                                </a>
                            )
                        })
                    }
                    <button className="rounded-md p-2 bg-gray-800">
                        <SunIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
