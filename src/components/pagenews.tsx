import React from 'react';

interface NewsProps {
    id: string;
    title: string;
    description: string;
    author: string;
    date: string;
}

const News: React.FC<NewsProps> = ({ id, title, description, author, date }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                Autor: {author} | Fecha: {date}
            </p>
        </div>
    );
};

export default News;