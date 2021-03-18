import { FC } from 'react';

import { Video } from 'domains/youtube';

type Props = {
  You: string;
  videos: Video[];
  isLoading?: boolean;
};

const Youtube: FC<Props> = ({
  You = 'You',
  videos = [],
  isLoading = false,
}) => {
  const title = `${You}Tube`;
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
  console.log(videos);
  console.log(isLoading);

  return (
    <div>
      <p>{title}</p>
      {videoDiv === null ? <p>now loading...</p> : videoDiv.map((item) => item)}
    </div>
  );
};

export default Youtube;
