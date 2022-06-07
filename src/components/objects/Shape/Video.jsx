import React from 'react';
import ContextCanvas from '../../../context/ContextCanvas';

const Video = () => {
  const [canvas] = useContext(ContextCanvas);
  function getVideoElement(url) {
    var videoE = document.createElement('video');
    videoE.width = 530;
    videoE.height = 298;
    videoE.muted = true;
    videoE.crossOrigin = "anonymous";
    var source = document.createElement('source');
    source.src = url;
    source.type = 'video/mp4';
    videoE.appendChild(source);
    return videoE;
}
var url_mp4 = 'https://www.youtube.com/watch?v=4ELH8CT4J0A';

var videoE = getVideoElement(url_mp4);
var fab_video = new fabric.Image(videoE, {left: 0,   top: 0});
canvas.add(fab_video);
fab_video.getElement().play();
fabric.util.requestAnimFrame(function render() {
   canvas.renderAll();
   fabric.util.requestAnimFrame(render);
});

  return (

    <>
    
    <video ></video>


    
    </>




  

  )
};

export default Video;
