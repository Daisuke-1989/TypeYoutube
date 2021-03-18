export type Video = {
  etag: string;
  videoId: string;
  title: string;
  description: string;
  thumbnails: string;
  width: number;
  height: number;
};

export type Data = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: pageInfoType;
  items: item[];
};

export type pageInfoType = {
  totalResults: number;
  resultPerPage: number;
};

export type item = {
  kind: string;
  etag: string;
  id: itemId;
  snippet: snippet;
};

export type itemId = {
  kind: string;
  videoId: string;
};

export type snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
};

export type thumbnails = {
  default: videoThumbnails;
  medium: videoThumbnails;
  high: videoThumbnails;
};

export type videoThumbnails = {
  url: string;
  width: number;
  height: number;
};

const isVideo = (arg: unknown): arg is Video => {
  const v = arg as Video;

  return (
    typeof v?.etag === 'string' &&
    typeof v?.videoId === 'string' &&
    typeof v?.title === 'string' &&
    typeof v?.description === 'string' &&
    typeof v?.thumbnails === 'string' &&
    typeof v?.width === 'number' &&
    typeof v?.height === 'number'
  );
};

const isVideos = (args: unknown[]): args is Video[] =>
  !args.some((arg) => !isVideo(arg));

const isData = (arg: unknown): arg is Data => {
  const d = arg as Data;

  return (
    typeof d.kind === 'string'
    // typeof d.etag === 'string' &&
    // typeof d.nextPageToken === 'string' &&
    // typeof d.regionCode === 'string' &&
    // typeof d.pageInfo.totalResults === 'number' &&
    // typeof d.pageInfo.resultPerPage === 'number' &&
    // typeof d.items[0].kind === 'string' &&
    // typeof d.items[0].id === 'string' &&
    // typeof d.items[0].snippet.publishedAt === 'string' &&
    // typeof d.items[0].snippet.channelId === 'string' &&
    // typeof d.items[0].snippet.title === 'string' &&
    // typeof d.items[0].snippet.description === 'string' &&
    // typeof d.items[0].snippet.thumbnails.default.url === 'string' &&
    // typeof d.items[0].snippet.thumbnails.default.width === 'string' &&
    // typeof d.items[0].snippet.thumbnails.default.height === 'string' &&
    // typeof d.items[0].snippet.thumbnails.medium.url === 'string' &&
    // typeof d.items[0].snippet.thumbnails.medium.width === 'string' &&
    // typeof d.items[0].snippet.thumbnails.medium.height === 'string' &&
    // typeof d.items[0].snippet.thumbnails.high.url === 'string' &&
    // typeof d.items[0].snippet.thumbnails.high.width === 'string' &&
    // typeof d.items[0].snippet.thumbnails.high.height === 'string' &&
    // typeof d.items[0].snippet.channelTitle === 'string' &&
    // typeof d.items[0].snippet.liveBroadcastContent === 'string'
  );
};

export { isVideo, isVideos, isData };
