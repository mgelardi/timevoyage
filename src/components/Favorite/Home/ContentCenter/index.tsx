import SufiyaElizaFirstPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaFirstPost";
import React, { FC } from "react";
import SufiyaElizaThirdPost from "../../../NewsFeed/Style1/ContentCenter/SufiyaElizaThirdPost";
import SufiyaElizaSecondPost from "@/components/NewsFeed/Style1/ContentCenter/SufiyaElizaSecondPost";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";
import { styleOneMoreComponent } from "@/Data/NewsFeed";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";

const ContentCenter: FC = () => {
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.favouriteHome);

  return (
    <div className="content-center">
      <div className="post-panel infinite-loader-sec">
        {/* <SufiyaElizaFirstPost mainImage={19} userImage={15} /> */}
        {/* <SufiyaElizaThirdPost fourthPost={18} userImage={14} /> */}
        {/* <SufiyaElizaSecondPost userImage={10} /> */}
        {/* <SufiyaElizaThirdPost userImage={11} iframeLink="https://media.giphy.com/media/QNFgN0x76JUgAlXvEk/giphy.gif" /> */}
        <SufiyaElizaThirdPost userImage={11} iframeLink="https://giphy.com/embed/l0HUoptodOGOWS532"/>
        <SufiyaElizaSecondPost userImage={15} />
        {styleOneMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
      </div>
      <ShowMorePostIcon dataLength={styleOneMoreComponent.length} value="favouriteHome" />
    </div>
  );
};

export default ContentCenter;
