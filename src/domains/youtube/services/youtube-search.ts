import axios, { AxiosResponse } from 'axios';
import { isData, Video, Data, item } from '../models/video';

const YoutubeSearch = async (): Promise<Video[]> => {
  const YOUTUBE_API_KEY = 'SET_YOUR_API_KEY';

  const videos = await axios.get<AxiosResponse<any>>(
    `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=citypop&maxResults=3&key=${YOUTUBE_API_KEY}`,
  );
  const videoData: Video = {
    etag: '',
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
    width: 0,
    height: 0,
  };
  // const videos = (await response.json()) as unknown[];
  console.log(videos);

  if (!isData(videos.data)) {
    throw Error('API type error');
  }
  const yData: Data = videos.data;
  console.log(yData);

  const videosData: Video[] = await Promise.all(
    yData.items.map((movie: item) => {
      videoData.etag = movie.etag;
      videoData.videoId = movie.id.videoId;
      videoData.title = movie.snippet.title;
      videoData.description = movie.snippet.description;
      videoData.thumbnails = movie.snippet.thumbnails.medium.url;
      videoData.width = movie.snippet.thumbnails.medium.width;
      videoData.height = movie.snippet.thumbnails.medium.height;
      console.log(videoData);

      return videoData;
    }),
  );

  console.log(videosData);

  return videosData;
};

export default YoutubeSearch;
