import { FC, useState, useEffect } from 'react';

import { Video, YoutubeSearch } from 'domains/youtube';
import VideoList from 'components/organisms/VideoList';

type Props = {
  confirmedInput: string;
};

const Youtube: FC<Props> = ({ confirmedInput = '' }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const videosData: Video[] = await YoutubeSearch(confirmedInput);
        setVideos(videosData);
      } catch (err) {
        throw new Error(`organization '${confirmedInput}' not exists`);
      } finally {
        console.log('finish');
      }
    };
    void load();
  }, [confirmedInput]);

  return <VideoList {...{ videos }} />;
};

export default Youtube;
