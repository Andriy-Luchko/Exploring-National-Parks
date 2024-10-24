import React, { useEffect } from 'react';

const TwitterTimeline = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <a 
        className="twitter-timeline"
        href="https://twitter.com/TempleUniv"
        data-height="200" 
      >
        Tweets by Temple University
      </a>
    </>
  );
};

export default TwitterTimeline;
