import React from "react";
import { useCommentsStore } from "../store/commentStore";

interface IconProps {
  children: React.ReactNode;
  classname?: string;
  color?: string;
  hoverColor?: string;
  isSubcomment: boolean;
  id: number;
  isLikeBtn: boolean;
}

const Icon: React.FC<IconProps> = ({
  children,
  classname = "",
  color = "text-[#929292]",
  isSubcomment,
  id,
  isLikeBtn,
}) => {
  const { likeComment, dislikeComment } = useCommentsStore();

  return (
    <button
      onClick={() =>
        isLikeBtn
          ? likeComment(isSubcomment, id)
          : dislikeComment(isSubcomment, id)
      }
      className={`thumbs-up ${color} hover:text-black ${classname}`}
    >
      {children}
    </button>
  );
};

export default Icon;
