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
  const [sortOrder, setSortOrder] = useState('publishedAt');

  

  
useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a88ea21a8fb14609b233a1610018fcd3&sortBy=${sortOrder}`);
        setAllNews(response.data.articles);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    getNews(); 
  }, [sortOrder]); 

    const sortedNews = [...allNews].sort((a, b) => {
    switch (sortOrder) {
      case 'relevancy':
        return a.relevancy - b.relevancy;
      case 'popularity':
        return a.popularity - b.popularity;
      default:
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    }
  });

  const currentPageNews = sortedNews.slice(startIndex, endIndex).filter((newsItem) => newsItem.urlToImage && newsItem.description && newsItem.content && newsItem.title);


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
    <div className='sorting'> 
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={(e)=> setSortOrder(e.target.value)}>
        <option value="publishedAt">Published</option>
        <option value="popularity">Popularity</option>
        <option value="relevancy">Relevancy</option>
      </select>
    </div>
    <div className='news-cont'>
      {currentPageNews.map((newsItem, index) => (
        <NewsCard key={index} news={newsItem}/>
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
