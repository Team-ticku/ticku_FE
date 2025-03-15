import React from "react";
import styled from "styled-components";
import PostListItem from "./postListItem";

const Div = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: flex-start; /* 수직 정렬을 최상단으로 */
  max-height: 666px; /* 높이를 제한 */
  width: 390px;
  overflow-y: auto; /* 세로 방향 스크롤을 허용 */
  overflow-x: hidden;
`;

function PostList(props) {
  const { posts, onClickItem } = props;
  return (
    <Div>
      {posts.map((post) => (
        <PostListItem
          key={post._id}
          post={post}
          content={post.content}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Div>
  );
}

export default PostList;
