import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";
import Button from '@mui/material-next/Button';
import { useNavigate } from "react-router-dom";

function Home() {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState(9);
  const animationRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5b637cf26a2040b19b7b139e39f8c1d6`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (animationRef.current) {
        const rect = animationRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0) {
          animationRef.current.classList.add("tracking-in-contract-bck-top");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadMore = () => {
    setVisibleNews(visibleNews + 9);
  };

  return (
    <>
      <div className="main-cont">
        <div className="text-content">
          <h1 className="text-focus-in">we write only the truth</h1>
          <h3 className="text-focus-in">the only independent newspaper</h3>
        </div>
      </div>
      <div className="news-content">
        <h1 ref={animationRef} className="tracking-in-contract-bck-top">
          Our Latest News
        </h1>
        <p className="tracking-in-contract-bck-top">
          Stay updated with our latest articles, news, and updates. Explore insightful content curated just for you.
        </p>
        <Button disabled={false} size="large" variant="elevated" className="btn1" onClick={()=>navigate('/news')}>
          <span>Click me</span>
        </Button>
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
