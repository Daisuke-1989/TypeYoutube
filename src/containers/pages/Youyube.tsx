import { FC, useEffect, useState } from 'react';

import Youtube from 'components/pages/Youtube';

import { Video, YoutubeSearch } from 'domains/youtube';
import { useParams } from 'react-router';

const EngancedYoutube: FC = () => {
  const { You = '' } = useParams();
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadYoutube = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const videosData = await YoutubeSearch();
        setVideos(videosData);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void loadYoutube();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [You]);

  return <Youtube {...{ You, videos, isLoading }} />;
};
export default EngancedYoutube;
