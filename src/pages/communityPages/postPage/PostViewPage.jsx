import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BottomNavBar from "../../../components/common/bottomNavBars/BottomNavBar";
import PostBox from "../../../components/communityPage/postViewPage/PostBox";
import WriteComment from "../../../components/communityPage/postViewPage/WriteComment";
import CommentList from "../../../components/communityPage/postViewPage/CommentList";
import BackButton from "../../../components/common/BackButton";
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
        <div>
          <BackButton width={29} height={29} link={"/communityposts"} />
        </div>
        <PostBox post={post} />
        <WriteComment />
        <CommentList comments={post.comments} />
      </Div>
    </>
  );
}

export default PostViewPage;
