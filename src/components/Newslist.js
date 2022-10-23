import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
const Newslist = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=cricket&apiKey=2bdff305630945bb96207b4eb353632d"
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      <div>
        <img
          style={{ height: "20vh", display: "flex", flexDirection: "start" }}
          src="https://dynamic.brandcrowd.com/asset/logo/3dda3436-a6a2-4da3-8da2-ee519bf063e8/logo-search-grid-2x?v=637889834913200000&text=AZONE"
          alt="/"
        />
      </div>

      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default Newslist;
