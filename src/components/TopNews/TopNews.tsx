import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { TopNewsItem } from "./TopNewsItem";

export const TopNews = () => {
  const ApiToken = " ";
  const { data } = useFetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${ApiToken}&locale=us&limit=3`
  );
  const [news, setNews] = useState([]);

  useEffect(() => {
    data != null && setNews(data.data);
  }, [data]);

  return (
    <section className="topNews">
      {news.map(({ uuid, title, image_url, categories }) => (
        <TopNewsItem
          key={uuid}
          id={uuid}
          title={title}
          image_url={image_url}
          categories={categories}
        />
      ))}
    </section>
  );
};
