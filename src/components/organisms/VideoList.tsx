import { FC } from 'react';
import { Video } from 'domains/youtube';

const VideoList: FC<{ videos: Video[] }> = ({ videos = [] }) => {
  const videoDiv = videos.map((video: Video) => {
    const url = `https://www.youtube.com/embed/${video.videoId}`;

    return (
      <div style={{ margin: '20px', textAlign: 'center' }}>
        <iframe
          id={video.videoId}
          title="ytplayer"
          width={video.width}
          height={video.height}
          src={url}
          frameBorder="0"
        />
      </div>
    );
  });

  return (
    <>
      {videoDiv === null ? <p>now loading...</p> : videoDiv.map((item) => item)}
    </>
  );
};

export default VideoList;
