import React from 'react';
import Image from 'next/image';
import errorCat from '../public/img/error_cat.png';

const ErrorPage: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-2xl px-4 mx-auto mt-8">
            <h1 className="text-cpink font-extrabold text-5xl mb-6">Ooopps!</h1>
            <Image src={errorCat} />
            <p className="text-gray-400 text-2xl mb-6 font-semibold">Something went wrong... The page you were trying to reach doesn't exist.</p>
            <a className="text-primary font-semibold text-3xl cursor-pointer" href="/">Go back Home -{'>'}</a>
        </div>
    );
}

export default ErrorPage;
