import { useEffect, useState } from "react";
import { API } from "../../api/API";
import NewsCard from "../NewsCard";
import ModalNewsCard from "../ModalNewsCard";
import { INewsCard } from "../../interface/news_card.interface";

const MainPost = () => {
  const [mainPost, setMainPost] = useState<INewsCard[]>([]);
  const [selectedNews, setSelectedNews] = useState<INewsCard | null>(null);
  const [modalNews, setModalNews] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false)

  const getMainPost = async () => {
    setIsLoading(true)
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${API}`
    );
    const data = await res.json();
    setIsLoading(false)
    setMainPost(data.articles);
    console.log(data.articles);
  };

  const showModal = (news: INewsCard) => {
    setSelectedNews(news);
    setModalNews(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalNews(false);
  };

  useEffect(() => {
    getMainPost();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-around">
      {isLoading && <p>Loading...</p>}
      {mainPost.map((post, id) => (
        <div key={id} onClick={() => showModal(post)}>
          <NewsCard {...post} />
        </div>
      ))}
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

export default MainPost;
