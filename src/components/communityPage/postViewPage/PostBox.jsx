import React from "react";
import styled from "styled-components";
import UserAndTag from "./UserAndTag";
import Post from "./Post";
import Stats from "../postListPage/Stats";
import PropTypes from "prop-types";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Box = styled.div`
  border-bottom: 10px solid #b2c4df22;
  margin-bottom: 15px;
`;

function PostBox(props) {
  const { post } = props;
  return (
    <Box>
      <Div>
        <UserAndTag userId={post.userId} tag={post.tag} />
        <Post title={post.title} content={post.content} imageUrl={post.image} />
        <Stats
          likesCount={post.userLikes.length}
          marginLeft={40}
          commentsCount={post.commentsCount}
        />
      </Div>
    </Box>
  );
}

PostBox.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    userLikes: PropTypes.array.isRequired,
    commentsCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default PostBox;
