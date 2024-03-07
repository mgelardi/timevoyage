import SufiyaElizaFirstPost from "./SufiyaElizaFirstPost";
import ShowMorePostIcon from "@/Common/ShowMorePostIcon/ShowMorePostIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { styleOneMoreComponent } from "@/Data/NewsFeed";

const PostPanel: React.FC = () => {
  const level = useSelector((state: RootState) => state.ShowMorePostSlice.style1);
  return (
    <>
      <div className="post-panel infinite-loader-sec section-t-space">
        <SufiyaElizaFirstPost mainImage={1} userImage={1} />
        {styleOneMoreComponent.map((data, index) => (level.includes(index) ? data : ""))}
      </div>
      <ShowMorePostIcon dataLength={styleOneMoreComponent.length} value="style1" />
    </>
  );
};

export default PostPanel;
