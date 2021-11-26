import React from 'react';


interface ArticleDataProps {
    link: string
    title: string
    desc: string
}

interface ArticleProps {
    style: string
    data: ArticleDataProps
}

const primaryType = {
    div: "w-full rounded-md cursor-pointer mb-3 bg-primary hover:bg-tertiary hover:text-secondary transform transition duration-500 hover:scale-110",
    title: "font-extrabold text-2xl cursor-pointer text-gray-900",
    desc: "text-gray-900 font-semibold mt-2"
}

const secondaryType = {
    div: "w-full rounded-md cursor-pointer mb-3 bg-secondary hover:bg-tertiary transform transition duration-500 hover:scale-110",
    title: "font-extrabold text-2xl cursor-pointer text-white",
    desc: "text-gray-900 font-semibold mt-2"
}


const ArticleElement: React.FC<ArticleProps> = ({style, data}) => {

    return (
        <div
            className={(style === "primary" ? primaryType.div : secondaryType.div)}>
            <div className="w-full flex- flex-col p-2.5">
                <div className="flex flex-row items-center">
                    <span className="mr-2">✏</span>
                    <a className={(style === "primary" ? primaryType.title : secondaryType.title)}
                       href={data.link}>{data.title}</a>
                </div>
                <p className={(style === "primary" ? primaryType.desc : secondaryType.desc)}>{data.desc}</p>
            </div>
        </div>
    );
};

export default ArticleElement;
