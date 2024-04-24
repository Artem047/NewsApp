import { Link } from "react-router-dom";
import { INewsCard } from "../interface/news_card.interface";

const ModalNewsCard = ({
  description,
  title,
  urlToImage,
  author,
  publishedAt,
  url
}: INewsCard) => {

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const shortDate = new Date(publishedAt).toLocaleDateString("en-US", options);

  return (
    <div className="p-3 bg-[#F5F5F5] max-w-[750px] max-h-[500px] flex flex-col gap-3 justify-center items-center mt-10 rounded-xl">
      <img
        src={urlToImage ? urlToImage : '/news.svg'}
        alt={title}
        className="rounded-xl max-w-[340px] max-h-[250px] w-full h-full"
      />
      <h1 className="font-bold text-base">{title}</h1>
      <p className="text-sm">{description}</p>
      <Link to={`${url}`} target="blank" className="border-b-2 border-black">More info</Link>
      <div className="w-full h-16 bg-white rounded-xl flex flex-col justify-center items-center">
        <p className="font-bold text-sm">{author}</p>
        <div className="text-xs">{shortDate}</div>
      </div>
    </div>
  );
};

export default ModalNewsCard;
