import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import useArticles from '../hooks/useArticles';

const Home: React.FC = () => {
  const { articles, loading, error } = useArticles();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar onSearch={setSearchQuery} />
      <div className="max-w-7xl mx-auto p-4 grid gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
