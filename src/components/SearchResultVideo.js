import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import VideoLength from '../shared/videoLength';

const SearchResultVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-black/[0.1] rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-52 w-full md:w-48 lg:w-64 xl:w-[350px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 md:ml-4 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-xl font-normal line-clamp-2 text-black">
            {video?.title}
          </span>

          <div className="flex flex-col">
            <div className="flex text-xs font-semibold text-gray-500 truncate overflow-hidden my-1">
              <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
              <span className="flex text-[24px] leading-none font-bold text-black/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="flex items-start">
              <div className="flex flex-col">
                <div className="flex h-7 w-7 mr-3 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex">
                <span className="text-sm font-semibold mt-1 text-gray-500 flex items-center">
                  {video?.author?.title}
                </span>
                <span className=" mt-2 flex items-center">
                  {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                    <BsFillCheckCircleFill className="text-black/[0.6] text-[12px] lg:text-[10px] xl:text-[12px] ml-[6px]" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <span className="empty:hidden text-sm font-semibold line-clamp-1 md:line-clamp-2 text-gray-500 md:pr-24 md:my-4">
            {video?.descriptionSnippet}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideo;
