interface IProps {
  description: string | null;
  title: string;
  urlToImage: string | undefined;
}

const NewsCard = ({
  description,
  title,
  urlToImage,
}: IProps) => {
  return <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <img src={urlToImage} alt={title} />
  </div>;
};

export default NewsCard;
