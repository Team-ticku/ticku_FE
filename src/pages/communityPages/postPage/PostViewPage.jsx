import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BottomNavBar from "../../../components/common/bottomNavBars/BottomNavBar";
import PostBox from "../../../components/communityPage/postViewPage/PostBox";
import WriteComment from "../../../components/communityPage/postViewPage/WriteComment";
import CommentList from "../../../components/communityPage/postViewPage/CommentList";
import data from "../data.json";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 730px;
`;

function PostViewPage() {
  const { postId } = useParams();

  const post = data.find((item) => item.id === parseInt(postId));

  return (
    <>
      <BottomNavBar />
      <Div>
        <PostBox post={post} />
        <WriteComment />
        <CommentList comments={post.comments} />
      </Div>
    </>
  );
}

export default PostViewPage;
