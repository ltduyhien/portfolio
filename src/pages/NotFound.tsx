import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-72 bg-gray-900"></div>
      <div className="flex-1 flex justify-center items-start px-4 pt-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-left max-w-md"
        >
          <h1 className="text-lg font-bold mb-6 text-white leading-tight">
          Sorry, the link you are looking for is not found!
        </h1>
        
        <div className="text-gray-300 mb-6">
          <p className="text-base mb-3">Possible reasons:</p>
          <div className="space-y-2 ml-4">
            <p className="flex items-start text-sm">
              <span className="mr-2">•</span>
              <span>Either the link is broken</span>
            </p>
            <p className="flex items-start text-sm">
              <span className="mr-2">•</span>
              <span>Or the page has moved</span>
            </p>
            <p className="flex items-start text-sm">
              <span className="mr-2">•</span>
              <span>Or maybe there could be typo in the URL</span>
            </p>
          </div>
        </div>
        
        <div className="text-gray-300 mb-4">
          <p className="text-base">For now we can try to:</p>
        </div>
        
        <div className="space-y-2 ml-4">
          <Link
            to="/"
            className="flex items-start text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm"
          >
            <span className="mr-2">•</span>
            <span>Back to homepage</span>
          </Link>
          <a
            href="mailto:letranduyhien@gmail.com"
            className="flex items-start text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm"
          >
            <span className="mr-2">•</span>
            <span>Contact me for the content you are looking for</span>
          </a>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
