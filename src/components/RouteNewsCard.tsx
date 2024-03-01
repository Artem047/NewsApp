import { useParams } from "react-router-dom";

const RouteNewsCard = () => {
  const { news } = useParams();

  return <div>{news}</div>;
};

export default RouteNewsCard;
