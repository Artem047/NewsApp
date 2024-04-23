import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INewsCard } from "../interface/news_card.interface";
import axios from "axios";
import { API } from "../api/API";
import NewsCard from "../components/NewsCard";
import Loading from "../components/loading/Loading";

const NewsCategory = () => {
  const { category } = useParams();
  const [post, setPost] = useState<INewsCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getNewsCategory = async (page: string | undefined) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${page}&pageSize=9&apiKey=${API}`
      );
      setPost(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNewsCategory(category);
  }, [category]);

  return (
    <div>
      NewsCategory: {category}
      {isLoading && <Loading />}
        <div className="flex flex-wrap gap-10 justify-around">
          {post.map((p, id) => {
            return (
              <div key={id}>
                <NewsCard {...p} />
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default NewsCategory;
