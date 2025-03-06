import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostListItem from "./postListItem";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-height: 666px;
  overflow-y: auto;
  overflow-x: hidden;
`;

function PostList(props) {
  const { posts, onClickItem } = props;
  return (
    <Div>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          content={post.content}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  onClickItem: PropTypes.func,
};

export default PostList;
