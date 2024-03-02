import { useEffect, useState } from "react";
import { API } from "../../api/API";
import NewsCard, { IProps } from "../NewsCard";
import ModalNewsCard from "../ModalNewsCard";

const MainPost = () => {
  const [mainPost, setMainPost] = useState<IProps[]>([]);
  const [selectedNews, setSelectedNews] = useState<IProps | null>(null);
  const [modalNews, setModalNews] = useState<boolean>(false);

  const getMainPost = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API}`
    );
    const data = await res.json();
    const filteredPost = data.articles.filter(
      (post: IProps) =>
        post.urlToImage != null && post.author != null && post.author != ""
    );
    setMainPost(filteredPost);
    console.log(filteredPost);
  };

  const showModal = (news: IProps) => {
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
