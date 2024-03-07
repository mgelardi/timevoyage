import { TotalCapsules, TotalConnections } from "../../../utils/constant";
import { FC } from "react";

const PostStats: FC = () => {
  return (
    <div className="post-stats">
      <ul>
        <li>
          <h3>15</h3>
          <span>{TotalCapsules}</span>
        </li>
        <li>
          <h3>32</h3>
          <span>{TotalConnections}</span>
        </li>
      </ul>
    </div>
  );
};

export default PostStats;
