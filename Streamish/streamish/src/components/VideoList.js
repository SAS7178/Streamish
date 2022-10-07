import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosWComments } from "../modules/videoManager";

export const VideoList = ({searchTermState}) => {
  const [videos, setVideos] = useState([]);
  const [searchedVideo, setSearchedVideo] = useState([]);


  const getVideos = () => {
    getAllVideosWComments().then(videos => setVideos(videos));
    getAllVideosWComments().then(videos => setSearchedVideo(videos));
  };


  useEffect(() => {
    getVideos();
  }, []);

  useEffect(
    () => {
      const searchVideos = videos.filter(video =>
        {
          return video.title.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
    setSearchedVideo(searchVideos);
  }, 
  [searchTermState]);


  return (
    <div className="container">
      <div className="row justify-content-center">
        {searchedVideo.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;