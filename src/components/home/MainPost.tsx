import { useEffect, useState } from "react";
import { API } from "../../api/API";
import axios from "axios";
import NewsCard from "../NewsCard";

const MainPost = () => {
  const [mainPost, setMainPost] = useState([]);

  const getMainPost = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
    );
    const filteredPost = res.data.articles.filter(
      (post) => post.urlToImage != null
    );
    setMainPost(filteredPost);
    console.log(filteredPost);
  };

  useEffect(() => {
    getMainPost();
  }, []);

  return (
    <div>
      {mainPost.map((post, id) => (
          <NewsCard
            key={id}
            title={post.title}
            description={post.description}
            urlToImage={post.urlToImage}
          />
        ))}
    </div>
  );
};

export default MainPost;
