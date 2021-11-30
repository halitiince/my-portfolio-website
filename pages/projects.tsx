import React from 'react';
import projectsData from "../data/projects";


const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-full max-w-2xl px-4 mx-auto">
            <h1 className="text-cpink font-bold text-2xl uppercase mb-4">Projects
                <span className="text-2xl ml-2">🎹</span></h1>
            {
                projectsData.map(project => {
                    return (
                        <figure className="flex flex-row max-w-full mb-4 bg-gray-800 border-l-4 border-cpink rounded-md p-3.5 cursor-pointer">
                            <div className="flex justify-start">
                                <img  className="h-44 w-40 rounded-md mb-2" src="https://cataas.com/cat/says/hello%20world!" alt="an example project screenshot"/>
                            </div>
                            <div className="ml-2 flex-col flex-col items-center justify-center">
                                <div>
                                    <h1 className="font-extrabold text-2xl text-white">{project.name}</h1>
                                    <p className="font-bold text-md text-gray-400">{project.description}</p>
                                </div>
                                <div className="grid grid-cols-3 gap-x-2 gap-y-2 mt-2">
                                    {project.techStack.map(element => {
                                        return <p className="text-xs px-2 py-1 rounded-md bg-cpink text-white font-semibold text-center">{element}</p>
                                    })}
                                </div>
                            </div>
                        </figure>
                    )
                })
            }
        </div>
    );
}

export default Projects;
