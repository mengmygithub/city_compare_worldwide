import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h1 className="text-center">
          <div className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform hover:scale-105 transition-transform duration-300">
            城市Offer薪资对比工具          
          </div>
          <div className="text-l md:text-l font-black text-red-500 dark:text-red-400 mt-3">
            在不同城市要过上同等生活水平的我到底需要多少钱？
          </div>
        </h1>
        
        <div className="flex justify-center items-center mt-4 text-xs text-gray-600 dark:text-gray-400">
          <a 
            href="https://github.com/mengmygithub/city_compare_worldwide" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 
