import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function AllUploads() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Make the GET request when the component mounts
    axios.get('https://loomi-backend-private.onrender.com/get-all-url')
      .then(response => {
        console.log(response.data.data.data);
        setVideos(response.data.data.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  // Render the video elements
  return (
    <div class ="">
    <div class="grid grid-cols-3 gap-4 ">
      {videos.map(video => (
        <video key={video._id} src={video.url} controls />
      ))}
    </div>
    </div>
  );
};

