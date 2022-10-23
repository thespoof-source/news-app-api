import React from "react";
import "./NewsItem.css";

function NewsItem({ title, description, url, urlToImage }) {
  return (
    <div className="news-app">
      <div className="newsitem">
        <img className="news-image" src={urlToImage} alt="/" />
        <h3>
          <a href={url}>{title}</a>
        </h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
