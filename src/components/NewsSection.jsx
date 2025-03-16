import React from 'react';
import NewsCard from './NewsCard';

const NewsSection = ({ title, news }) => {
  return (
    <section className={title === "For you" ? "" : "mt-8"}>
      <h2 className="text-2xl font-bold text-blue-500 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {news.map(newsItem => (
          <NewsCard key={newsItem.id} news={newsItem} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
