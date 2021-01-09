import { useState, useEffect } from 'react';
import YouTube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); 

  const search = async (term) => {
    const res = await YouTube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(res.data.items);
  };

  // There's no defined way of returning values from a custom hook, you can use either an array (which is what useEffect returns)
  // or an object.
  return [videos, search];
};

export default useVideos;
