import { useEffect, useState } from "react";
import { API } from "../../api/API";
import NewsCard from "../NewsCard";
import { INewsCard } from "../../interface/news_card.interface";
import ModalNewsCard from "../ModalNewsCard";
import axios from "axios";
import Loading from "../loading/Loading";

const PopularPost = () => {
  const [mainPost, setMainPost] = useState<INewsCard[]>([]);
  const [selectedNews, setSelectedNews] = useState<INewsCard | null>(null);
  const [modalNews, setModalNews] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentNews, setCurrentNews] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (): void => {
    if (document.documentElement) {
      if (
        document.documentElement.scrollHeight -
          (document.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setFetching(true);
      }
    }
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
    document.addEventListener("scroll", scrollHandler);

    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      setIsLoading(true);
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&page=${currentNews}&apiKey=${API}`
        )
        .then((res) => {
          setIsLoading(false);
          setMainPost([...mainPost, ...res.data.articles]);
          setCurrentNews((prev) => prev + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, currentNews, mainPost]);

  return (
    <div className="flex flex-wrap gap-10 justify-around">
      {isLoading && <Loading />}
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

export default PopularPost;
