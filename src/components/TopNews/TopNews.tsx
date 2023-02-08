import { FC, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const TopNews: FC = () => {
  const ApiToken = "";
  const { data } = useFetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${ApiToken}&locale=us&limit=3`
  );
  const [news, setNews] = useState([]);

  useEffect(() => {
    data != null && setNews(data.data);
  }, [data]);

  return (
    <div className="container">
      <div className="topNews">
        {news.map(({ uuid, title, image_url, categories }) => (
          <div className="topNews__content" key={uuid}>
            <img
              className="topNews__content--image"
              src={image_url}
              alt={title}
            />
            <div className="topNews__content--info">
              <span>{categories[0]}</span>
              <h3>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
