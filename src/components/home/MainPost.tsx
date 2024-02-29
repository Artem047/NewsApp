import { useEffect, useState } from "react";
import { API } from "../../api/API";
import axios from "axios";

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
      <div>
        {mainPost.map((post, id) => {
          return (
            <div key={id}>
              <h1>{post.title}</h1>
              <img src={post.urlToImage} alt="" />
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPost;
