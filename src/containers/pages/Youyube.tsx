import { FC, useState } from 'react';
import useDelayedEffect from 'hooks/delayedEffect';
import Youtube from 'components/pages/Youtube';

// import { Video } from 'domains/youtube';

const EngancedYoutube: FC = () => {
  const [input, setInput] = useState<string>('');
  const [confirmedInput, setConfirmedInput] = useState<string>('');
  //   const [videos, setVideos] = useState<Video[]>([]);

  useDelayedEffect(
    (): void => {
      setConfirmedInput(input);
    },
    [input],
    500,
  );
  //   useEffect(() => {
  //     const loadYoutube = async (): Promise<void> => {
  //       try {
  //         const videosData = await YoutubeSearch();
  //         setVideos(videosData);
  //       } catch (err) {
  //         throw new Error(err);
  //       } finally {
  //         console.log('finish');
  //       }
  //     };

  // void loadYoutube();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [input]);

  return (
    <>
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <p>{`text: ${input}`}</p>
        <p>{`confirmedText: ${confirmedInput}`}</p>
      </div>
      <Youtube {...{ confirmedInput }} />
    </>
  );
};
export default EngancedYoutube;
