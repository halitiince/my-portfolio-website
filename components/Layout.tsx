import React from 'react';
import {NextPage} from "next";
import Header from "./Header";

const Layout: NextPage = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col">
            <Header/>
            <main className="flex flex-col justify-center w-full max-w-2xl px-4 mx-auto mt-8">{children}</main>
        </div>
    );
};

export default Layout;
