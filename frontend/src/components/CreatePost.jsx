import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = 'https://blogging-website-aksz.onrender.com/api/v1';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState(''); // Storing logged-in user's name
  const [tags, setTags] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading

    // Split tags by comma and trim whitespace
    const tagsArray = tags.split(',').map((tag) => tag.trim());

    try {
      const response = await axios.post(
        `${API_BASE_URL}/posts`,
        {
          title,
          description,
          content,
          author,
          tags: tagsArray,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      alert('Post created successfully!');
      setTitle(''); // Clear form inputs
      setDescription('');
      setContent('');
      setTags('');
      navigate('/home'); // Navigate to home page
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong, please try again.');
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[600px] mt-[150px]'>
        <h2 className="text-4xl font-bold text-center text-black mb-8">Create a New Post</h2>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            required
          />
          <input
            type="text"
            placeholder="Author"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Tags (comma-separated) E.g. Gen-AI, Data Science, ML, UI-UX"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
          <button
            type="submit"
            className={`bg-black text-white py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
