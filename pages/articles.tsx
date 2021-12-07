import React from 'react';
import ArticleElement from "../components/ArticleElement";

const articles = [{
    data: {
        title: "Blogpost Title 1",
        desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        link: "#"
    }
},
    {
        data: {
            title: "Blogpost Title 2",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            link: "#"
        }
    },
    {
        data: {
            title: "Blogpost Title 3",
            desc: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            link: "#"
        }
    }
]

const Articles: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-2xl px-4 mx-auto">
            <h1 className="text-white font-bold text-2xl uppercase mb-4">Articles
                <span className="text-2xl ml-2">📖</span></h1>
            {
                articles.map((article) => {
                    return <ArticleElement key={article.data.title} data={article.data}/>
                })
            }
        </div>
    );
}

export default Articles;
