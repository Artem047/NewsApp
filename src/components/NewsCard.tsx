export interface IProps {
  description: string | null;
  title: string;
  urlToImage: string | undefined;
}

const NewsCard = ({ description, title, urlToImage }: IProps) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={urlToImage} alt={title} />
      <p>{description}</p>
    </>
  );
};

export default NewsCard;
