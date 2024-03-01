import { Link } from "react-router-dom";

export interface IProps {
  description: string | null;
  title: string;
  urlToImage: string | undefined;
  author: string;
  publishedAt: string;
}

const NewsCard = ({ description, title, urlToImage, author, publishedAt }: IProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const options:Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const shortDate = new Date(publishedAt).toLocaleDateString("en-US", options)
  return (
    <Link to='/sports' className="p-3 bg-[#F5F5F5] max-w-[340px] h-[370px] flex flex-col gap-3 justify-center items-center mt-10 rounded-xl">
      <img src={urlToImage} alt={title} className="rounded-xl max-w-[340px] max-h-[180px] w-full h-full" />
      <h1 className="font-bold text-base">{truncateText(`${title}`, 35)}</h1>
      <p className="text-sm h-10">{truncateText(`${description}`, 80)}</p>
      <div className="w-full h-16 bg-white rounded-xl flex flex-col justify-center items-center">
        <p className="font-bold text-sm">{author}</p>
        <div className="text-xs">{shortDate}</div>
      </div>
    </Link>
  );
};

export default NewsCard;
