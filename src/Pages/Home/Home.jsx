import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";

function Home() {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5b637cf26a2040b19b7b139e39f8c1d6`
        );
        setNews(response.data.articles);
        console.log(response.data.articles)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleNews(visibleNews + 9);
  };

  return (
    <>
      <div className="main-cont">
        <div className="text-content">
          <h1 className="tracking-in-expand">we write only the truth</h1>
          <h3 className="tracking-in-expand">the only independent newspaper</h3>
        </div>
      </div>
      <div className="news-content">
        <div className="news-card-cont">
  {news
    .filter((newsItem) => newsItem.urlToImage && newsItem.description && newsItem.content && newsItem.title)
    .slice(0, visibleNews)
    .map((newsItem, index) => (
      <NewsCard key={index} news={newsItem} />
    ))}
</div>
        {visibleNews < news.length && (
          <h2 onClick={loadMore} className="load-more-button">
            Load More...
          </h2>
        )}
      </div>
    </>
  );
}

export default Home;
