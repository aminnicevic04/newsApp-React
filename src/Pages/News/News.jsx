import React, { useEffect, useState } from 'react';
import './News.css';
import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


function News() {
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(18);
  

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5b637cf26a2040b19b7b139e39f8c1d6&pageSize=100`);
        setAllNews(response.data.articles);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getNews();
  }, []); 

  const currentPageNews = allNews.slice(startIndex, endIndex).filter((newsItem) => newsItem.urlToImage && newsItem.description && newsItem.content && newsItem.title);

  const handleNextClick = () => {
    setStartIndex(startIndex + 18);
    setEndIndex(endIndex + 18);
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0)
  };

  const handlePrevClick = () => {
    setStartIndex(startIndex - 18);
    setEndIndex(endIndex - 18);
    setCurrentPage(currentPage - 1);
     window.scrollTo(0, 0);
  };

  return (
    <div className='main-div'>
      <div className='header'></div>
      <div className='news-cont'>
        {currentPageNews.map((newsItem, index) => (
          <NewsCard key={index} news={newsItem} />
        ))}
      </div>
      <div className='pagination'>
<FontAwesomeIcon
  icon={faBackward}
  onClick={handlePrevClick}
  className={startIndex <= 0 ? 'disabled-icon' : ''}
  style={{ fontSize: '2em', cursor:'pointer' }}
/>
<FontAwesomeIcon
  icon={faForward}
  onClick={handleNextClick}
  className={endIndex >= allNews.length ? 'disabled-icon' : ''}
  style={{ fontSize: '2em', marginLeft:'20px', cursor:'pointer' }}
/>
      </div>
    </div>
  );
}

export default News;
