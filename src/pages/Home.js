import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Get country from URL query params or default to 'us'
    const params = new URLSearchParams(location.search);
    const country = params.get('country') || 'us';
    
    // In a real app, you would fetch from an actual API using the country parameter
    // For example: fetchNewsFromApi(country)
    console.log(`Fetching news for country: ${country}`);
    
    // For now, we'll simulate loading and set mock data
    setLoading(true);
    setTimeout(() => {
      setNews([
        {
          id: 1,
          title: 'Sample News Headline 1',
          description: 'This is a sample news description that would typically come from an API.',
          source: 'News Source',
          publishedAt: '2023-11-15T12:30:00Z',
          urlToImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800'
        },
        {
          id: 2,
          title: 'Sample News Headline 2',
          description: 'Another sample news description. In a real app, this would be actual news content.',
          source: 'Another Source',
          publishedAt: '2023-11-15T10:15:00Z',
          urlToImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800'
        },
        {
          id: 3,
          title: 'Sample News Headline 3',
          description: 'A third sample news description showing how multiple news items would display.',
          source: 'Third Source',
          publishedAt: '2023-11-15T09:00:00Z',
          urlToImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, [location.search]);

  return (
    <main className="container mx-auto flex-grow p-4">
      <h1 className="text-3xl font-bold mb-6">Today's Headlines</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl">Loading news...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{article.source}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
