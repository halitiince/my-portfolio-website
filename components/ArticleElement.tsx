import React from 'react';


interface ArticleDataProps {
    link: string
    title: string
    desc: string
}

interface ArticleProps {
    data: ArticleDataProps
}

const primaryType = {
    div: "w-full rounded-md cursor-pointer mb-3 bg-ivory transform transition duration-500 hover:scale-105",
    title: "font-extrabold text-3xl cursor-pointer text-darkBg",
    desc: "text-gray-800 font-semibold mt-2"
}


const ArticleElement: React.FC<ArticleProps> = ({data}) => {

    return (
        <div
            className={primaryType.div}>
            <div className="w-full flex- flex-col p-2.5">
                <div className="flex flex-row items-center">
                    <a className={primaryType.title}
                       href={data.link}>{data.title}</a>
                </div>
                <p className={primaryType.desc}>{data.desc}</p>
            </div>
        </div>
    );
};

export default ArticleElement;
