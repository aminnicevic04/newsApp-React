import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './SingleNews.css'

function SingleNews() {
  const { title } = useParams();
  const location = useLocation();

  // Check if news object is defined
  const { state: news } = location;
  if (!news) {
    // Handle the case where news object is null or undefined
    return <div>No news found</div>;
  }
console.log(news)
  return (
    <div className='main'>
        <div className='left-side'>
      <h1>{news.title}</h1>    
      <p>{news.content}</p>
        <div className='others'>
            <h2>
  Source :{' '}
  <span
    className='span1'
    onClick={() => window.open(news.url, '_blank')}
  >
    {news.source.name}
  </span>
</h2>
        </div>
        </div>
            <img src={news.urlToImage} id='newspng'></img>
 
    </div>
  );
}

export default SingleNews;