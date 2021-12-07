import React from 'react';
import spotifyImage from "../public/img/spotify.png";
import projectsData from "../data/projects";
import Image from "next/image"


const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-full max-w-2xl px-4 mx-auto">
            <h1 className="text-white font-bold text-2xl uppercase">Projects
                <span className="text-2xl ml-2">🎹</span></h1>
            {
                projectsData.map(project => {
                    return (
                        <div key={project.name} className="flex bg-white rounded-xl max-h-30 mt-4  cursor-pointer transform transition duration-500 hover:scale-105">
                            <Image className="max-h-xl rounded-l-xl" src={spotifyImage} alt="project image ss"/>
                            <div className="py-2 px-2 flex-grow flex flex-col justify-between">
                                <div>
                                    <h1 className="text-3xl text-darkBg font-extrabold">{project.name}</h1>
                                    <p className="text-sm text-gray-900 font-bold pt-1">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap  items-center">
                                    {
                                        project.techStack.map((tech) => {
                                            return <p className="flex-grow text-center bg-gray-400 rounded-full py-2 px-3 mr-1.5 mt-2 text-darkBg font-semibold text-sm">{tech}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Projects;
