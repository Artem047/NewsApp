import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INewsCard } from "../interface/news_card.interface";
import axios from "axios";
import { API } from "../api/API";
import NewsCard from "../components/NewsCard";
import Loading from "../components/loading/Loading";
import ModalNewsCard from "../components/ModalNewsCard";

const NewsCategory = () => {
  const { category } = useParams();
  const [post, setPost] = useState<INewsCard[]>([]);
  const [selectedNews, setSelectedNews] = useState<INewsCard | null>(null);
  const [modalNews, setModalNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = (news: INewsCard) => {
    setSelectedNews(news);
    setModalNews(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalNews(false);
  };

  const getNewsCategory = async (page: string | undefined) => {
    setIsLoading(true);
    try {
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${page}&pageSize=25&apiKey=${API}`
        )
        .then((response) => {
          setPost(response.data.articles);
          setIsLoading(false);
        });
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
            <div key={id} onClick={() => showModal(p)}>
              <NewsCard {...p} />
            </div>
          );
        })}
      </div>
      {modalNews && selectedNews && (
        <div className="w-full h-full bg-[#bdbec7b9] fixed top-0 left-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl relative">
            <button className="absolute right-5" onClick={closeModal}>
              <img src="/close.png" alt="close" className="w-8 h-8" />
            </button>
            <ModalNewsCard {...selectedNews} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCategory;
