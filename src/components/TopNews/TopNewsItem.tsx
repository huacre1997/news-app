import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  image_url: string;
  categories: string;
}
export const TopNewsItem: FC<Props> = ({
  id,
  title,
  image_url,
  categories,
}) => {
  return (
    <Link key={id} to={`/news/${id}`} className="topNews__content">
      <div>
        <img className="topNews__content--image" src={image_url} alt={title} />
        <div className="topNews__content--info">
          <span>{categories[0]}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};
