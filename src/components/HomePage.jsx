import React from 'react';
import Header from './Header';
import NewsSection from './NewsSection';

const HomePage = () => {
  // Mock data for news sections
  const forYouNews = [
    {
      id: 1,
      title: "Jasprit Bumrah says he could've dismissed Konstas '6-7 times' in first two overs: 'I've played T20s for past 12 years'",
      source: "THE TIMES OF INDIAN",
      timeAgo: "9h",
      readTime: "2 min read",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 2,
      title: "Elon Musk's Ex Grimes Slams Racism Against Indians: 'My Stepdad's Indian And...'",
      source: "USA TODAY",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 3,
      title: "Sudurpaschim Royals Vs Janakpur Bolts Highlights, Nepal Premier League Final: Lahiru Milantha Fires JBK To Inaugural NPL Title",
      source: "The Himalayan",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 4,
      title: "Vodafone Idea Share Price: Vodafone Group sells entire stake to settle Rs 11,650 cr debt - Details",
      source: "THE TIMES OF INDIAN",
      imageUrl: "https://placehold.co/600x400"
    }
  ];
  
  const suggestedNews = [
    {
      id: 5,
      title: "'Reckless provocation': North Korea slams US-led criticism over alleged support for Russia's war in Ukraine",
      source: "AP News",
      timeAgo: "1w",
      readTime: "2 min read",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 6,
      title: "Nitish Kumar Reddy: A star is born..",
      source: "The New Indian Express",
      timeAgo: "1h",
      readTime: "5 min read",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 7,
      title: "14,000 Graduates From The Tribhuan University..",
      source: "Kantipur Correspondent",
      imageUrl: "https://placehold.co/600x400"
    },
    {
      id: 8,
      title: "Remembering the 'kind leader' who led India with a steely resolve",
      source: "BBC News, Delhi",
      timeAgo: "13 hours ago",
      imageUrl: "https://placehold.co/600x400"
    }
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="p-4">
        <NewsSection title="For you" news={forYouNews} />
        <NewsSection title="Your Suggestion" news={suggestedNews} />
      </main>
    </div>
  );
};

export default HomePage;
