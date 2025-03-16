import React from 'react';

const NewsCard = ({ news }) => {
  const { title, source, timeAgo, readTime, imageUrl } = news;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} width="600" height="400" />
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500 text-sm">
          {source}
          {timeAgo && ` · ${timeAgo} `}
          {readTime && <span className="text-blue-500">{readTime}</span>}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
