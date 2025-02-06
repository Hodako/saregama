import React, { useState } from 'react';
import { uploadArticle } from '../services/api';

const Upload: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    institution: '',
    abstract: '',
    content: '',
    tags: [] as string[],
    image: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    await uploadArticle(data, 'your_jwt_token');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Upload Article</h2>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Author"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Institution"
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Abstract"
          value={formData.abstract}
          onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
