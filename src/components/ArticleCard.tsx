import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    author: string;
    abstract: string;
    image_url: string;
    publish_date: string;
    likes: number;
    comments: number;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={article.image_url} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.abstract.slice(0, 100)}...</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{article.author}</span>
          <span>{article.publish_date}</span>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <span className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {article.likes}
          </span>
          <span className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {article.comments}
          </span>
        </div>
        <Link
          to={`/article/${article.id}`}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
