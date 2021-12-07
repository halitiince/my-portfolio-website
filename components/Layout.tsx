import React from 'react';
import {NextPage} from "next";
import Header from "./Header";
import Footer from "./Footer";

const Layout: NextPage = ({children}) => {
    return (
        <div className="min-h-screen gradient-royal flex flex-col justify-between">
            <div>
                <Header/>
                <main className="flex flex-col justify-center w-full max-w-2xl px-4 mx-auto mt-8">{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
