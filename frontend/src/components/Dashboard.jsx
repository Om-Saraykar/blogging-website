import React from 'react';
import { Link } from 'react-router-dom';
import images from '../constants/images';

const Dashboard = () => {
  return (
    <div className='bg-[#f2e7dc] min-h-screen flex flex-col gap-[100px]'>
      <nav className="flex justify-between items-center p-5">
        <div className="text-4xl font-bold text-black">BLOGit</div>
        <div className="flex items-center space-x-8 text-lg text-gray-600 font-semibold">
          <Link to="/login" className="hover:text-black">Our Story</Link>
          <Link to="/login" className="hover:text-black">Membership</Link>
          <Link to="/login" className="hover:text-black">Write</Link>
          <Link to="/login" className="hover:text-black">Sign in</Link>
          <Link to="/signup">
            <button className="bg-black text-white py-2 px-4 rounded-full">Get started</button>
          </Link>
        </div>
      </nav>
      <div className="flex justify-around items-center">
        <main className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-black text-center mb-4">
            Human stories & ideas
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            A place to read, write, and deepen your understanding
          </p>
          <Link to="/login">
            <button className="bg-black text-white py-3 px-8 font-semibold rounded-full text-lg">
              Start reading
            </button>
          </Link>
        </main>
        <div className="">
          <img src={images.dashboardImage} alt="" className='h-[650px]' />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
