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
    div: "w-full rounded-md cursor-pointer mb-3 bg-gray-800 border-l-4 border-primary",
    title: "font-extrabold text-2xl cursor-pointer text-white",
    desc: "text-gray-400 font-semibold mt-2"
}


const ArticleElement: React.FC<ArticleProps> = ({data}) => {

    return (
        <div
            className={primaryType.div}>
            <div className="w-full flex- flex-col p-2.5">
                <div className="flex flex-row items-center">
                    <span className="mr-2">✏</span>
                    <a className={primaryType.title}
                       href={data.link}>{data.title}</a>
                </div>
                <p className={primaryType.desc}>{data.desc}</p>
            </div>
        </div>
    );
};

export default ArticleElement;
