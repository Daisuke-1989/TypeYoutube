import axios, { AxiosResponse } from 'axios';
import { isData, Video, Data, item } from '../models/video';

const YoutubeSearch = async (input: string): Promise<Video[]> => {
  const YOUTUBE_API_KEY = 'SET_YOUR_API_KEY';
  const videos = await axios.get<AxiosResponse<Data>>(
    `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${input}&maxResults=3&key=${YOUTUBE_API_KEY}`,
  );

  if (!isData(videos.data)) {
    throw Error('API type error');
  }
  const yData: Data = videos.data;

  const videosData: Video[] = yData.items.map(
    (movie: item): Video => {
      const videoData: Video = {
        etag: '',
        videoId: '',
        title: '',
        description: '',
        thumbnails: '',
        width: 0,
        height: 0,
      };
      videoData.etag = movie.etag;
      videoData.videoId = movie.id.videoId;
      videoData.title = movie.snippet.title;
      videoData.description = movie.snippet.description;
      videoData.thumbnails = movie.snippet.thumbnails.medium.url;
      videoData.width = movie.snippet.thumbnails.medium.width;
      videoData.height = movie.snippet.thumbnails.medium.height;

      return videoData;
    },
  );

  return videosData;
};

export default YoutubeSearch;
