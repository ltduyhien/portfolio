import React from 'react';
import { Link } from 'react-router-dom';
import { trackLinkedInClick, trackEmailClick, trackCVDownload } from '../utils/analytics';

const Footer = () => {
  return (
    <div className="mt-16 mb-10">
      <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">
        Thanks for visiting :)
      </h3>
      <p className="text-base font-medium text-zinc-700 dark:text-zinc-200">
        You can get in touch with me by{' '}
        <a
          href="https://www.linkedin.com/in/hienl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
          onClick={trackLinkedInClick}
        >
          Connecting
        </a>{' '}
        with me in LinkedIn,{' '}
        <a 
          href="/cv_hien.pdf" 
          download
          className="text-brand hover:underline"
          onClick={trackCVDownload}
        >
          Downloading
        </a>{' '}
        my CV, or{' '}
        <a 
          href="mailto:letranduyhien@gmail.com" 
          className="text-brand hover:underline"
          onClick={trackEmailClick}
        >
          Sending
        </a>{' '}
        me Email.
      </p>
    </div>
  );
};

export default Footer; 