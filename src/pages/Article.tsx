import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../services/api';
import TableOfContents from '../components/TableOfContents';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const loadArticle = async () => {
      const data = await fetchArticleById(Number(id));
      setArticle(data);
    };
    loadArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 flex">
        <TableOfContents />
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  );
};

export default Article;
