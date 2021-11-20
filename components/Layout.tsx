import React from 'react';
import {NextPage} from "next";
import Header from "./Header";

const Layout: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            <Header/>
        </div>
    );
};

export default Layout;
