import type {NextPage} from 'next'
import Image from "next/image";
import avatar from "../public/img/avatar.jpg";
import React from "react";
import SkillItem from "../data/SkillItem";
import skillElements from "../data/skillElements";

const Home: NextPage = () => {
    return (
        <div className="text-left">
            <div>
                <Image className="rounded-full" src={avatar} width="144" height="144" alt="home page avatar"/>
            </div>
            <div className="mt-4">
                <h2 className="text-primary text-lg uppercase font-semibold">Hey!
                    <span className="text-3xl ml-2">
                        👋
                    </span>
                </h2>
                <h1 className="text-white text-5xl font-extrabold pt-2 hover:text-primary">It's Halit.</h1>
                <ul className="ml-2 pt-2 list-disc list-inside text-gray-400 text-lg">
                    <li className="pt-1">
                        full stack software engineer @
                        <span className="text-tertiary uppercase text-2xl font-extrabold ml-2">
                             HAVELSAN
                        </span>
                    </li>
                    <li className="pt-1">
                        cat lover
                    </li>
                    <li className="pt-1">
                        lorem ipsum dolor sit amet
                    </li>
                    <li className="pt-1">
                        lorem ipsum dolor sit amet
                    </li>
                </ul>
            </div>
            <div className="mt-8">
                <h2 className="text-white font-extrabold text-2xl">
                    Tech Stack 🎒
                </h2>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4 ">
                    {
                        skillElements.map((element) => {
                            return <SkillItem name={element.name} icon={element.icon} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Home
