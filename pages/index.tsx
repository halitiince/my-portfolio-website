import type {NextPage} from 'next'
import Image from "next/image";
import avatar from "../public/img/avatar.jpg";
import React from "react";
import CssLogo from "../components/icons/CssLogo";
import TSLogo from "../components/icons/TSLogo";
import TailwindLogo from "../components/icons/TailwindLogo";
import SpringBootLogo from "../components/icons/SpringBootLogo";
import ReactLogo from "../components/icons/ReactLogo";
import PythonLogo from "../components/icons/PythonLogo";
import PostgreLogo from "../components/icons/PostgreLogo";
import MobXLogo from "../components/icons/MobXLogo";
import JSLogo from "../components/icons/JSLogo";
import JavaLogo from "../components/icons/JavaLogo";
import HtmlLogo from "../components/icons/HtmlLogo";
import GitLogo from "../components/icons/GitLogo";
import ElasticLogo from "../components/icons/ElasticLogo";
import DockerLogo from "../components/icons/DockerLogo";
import MongoLogo from "../components/icons/MongoLogo";

import 'animate.css';

const Home: NextPage = () => {
    return (
        <div className="text-left">
            <div className="animate__animated animate__fadeInTopRight">
                <Image className="rounded-full" src={avatar} width="144" height="144" alt="home page avatar"/>
            </div>
            <div className="animate__animated animate__fadeInRight mt-4">
                <div className="flex flex-row items-end">
                    <h2 className="text-primary text-lg uppercase font-bold">Hey!</h2>
                    <span className="text-3xl ml-2">
                        👋
                    </span>
                </div>
                <h1 className="animate__animated animate__flash animate__delay-1s text-white text-5xl font-extrabold pt-2 cursor-pointer">It's
                    Halit.</h1>
                <ul className="ml-2 pt-2 list-disc list-outside text-gray-400 text-md font-bold">
                    <li>
                        <div className="flex items-center">
                            <p className="inline-block">full stack software engineer</p>
                            <span className="text-tertiary inline-block uppercase font-semibold ml-2">
                              @ HAVELSAN
                        </span>
                        </div>
                    </li>
                    <li className="">
                        cat daddy
                    </li>
                    <li className="">
                        part-time camper
                    </li>
                </ul>
            </div>
            <div className="animate__animated animate__bounceInLeft animate__delay-1s mt-8">
                <div className="flex flex-row items-end">
                    <h2 className="text-white font-extrabold text-2xl">
                        Tech Stack
                    </h2>
                    <span className="text-2xl ml-2"> 🎒 </span>
                </div>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4 ">
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<TSLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"TypeScript"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<TailwindLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Tailwind CSS"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<SpringBootLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Spring Boot"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<ReactLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"React JS"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<PythonLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Python"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<PostgreLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"PostgreSQL"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<MobXLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"MobX"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<JSLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"JavaScript"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<JavaLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Java"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<HtmlLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"HTML5"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<GitLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Git"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<ElasticLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"ElasticSearch"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<DockerLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"Docker"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<CssLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"CSS3"}</p>
                    </div>
                    <div className="rounded-md w-50 p-2 text-gray-300 bg-gray-700 flex items-center">
                        <div className="w-6 h-6">
                            {<MongoLogo/>}
                        </div>
                        <p className="flex-1 ml-2 font-semibold">{"MongoDB"}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
