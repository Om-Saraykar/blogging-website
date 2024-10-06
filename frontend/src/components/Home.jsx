import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { format } from 'date-fns';

const API_BASE_URL = 'http://localhost:5000/api/v1';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const fetchArticles = async (tag = '') => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(`${API_BASE_URL}/posts/`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            tag
          }
        });
        setArticles(response.data);
      } catch (error) {
        console.error(error); // Log the error for debugging
        setError(error.response?.data?.message || 'Failed to fetch articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles(selectedTag);
  }, [selectedTag]);

  const formatDate = (dateString) => {
    try {
      return format(new Date(dateString), 'MMMM d, yyyy');
    } catch (error) {
      console.error(error); // Log the error for debugging
      return dateString;
    }
  };

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="text-black flex flex-col w-[80%] mx-auto bg-[#f2e7dc]">
      {/* Tag Filter Section */}
      <div className="space-x-6 px-8 py-5 text-[20px] font-semibold border-[1.5px] rounded-full mt-8 border-[#333333] bg-white">
        {['All', 'UI-UX', 'Data Science', 'ML', 'Gen-AI', 'Web-Dev'].map((tag) => (
          <button
            key={tag}
            className={`text-gray-700 hover:text-black transition-all duration-200 ease-in-out ${selectedTag === (tag === 'All' ? '' : tag) ? 'font-bold underline' : ''
              }`}
            onClick={() => handleTagClick(tag === 'All' ? '' : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Articles Section */}
      <main className="w-full flex flex-col">
        {articles.map((article) => (
          <Link
            to={`/article/${article._id}`}
            key={article._id}
            className="my-8 block">
            <div className="flex space-x-6 bg-white shadow-lg p-8 rounded transform transition duration-300 hover:shadow-xl hover:scale-105 hover:border hover:border-gray-300">
              <div className="w-full">
                <div className="text-sm text-gray-600">
                  {article.author}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
                <p className="text-base text-gray-700 my-4">{article.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                  <span>{formatDate(article.date)}</span>
                  <span>•</span>
                  <span>{article.views} views</span>
                  <span>•</span>
                  <span>{article.comments} comments</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </main>

    </div>
  );
};

export default HomePage;
