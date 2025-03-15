import React from "react";
import styled from "styled-components";
import UserAndTag from "./UserAndTag";
import Post from "./Post";
import Stats from "../postListPage/Stats";

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
        <div style={{ padding: 20 }}>
          <UserAndTag
            userId={post.userId}
            tag={post.tag}
            anonymous={post.anonymous}
          />
          <Post
            title={post.title}
            content={post.content}
            imageUrl={post.image ? `http://localhost:5000${post.image}` : null}
          />
        </div>
        <div style={{ paddingLeft: 25 }}>
          <Stats
            post={post}
            likesCount={post.likes.length}
            marginLeft={40}
            commentsCount={post.comments.length}
          />
        </div>
      </Div>
    </Box>
  );
}

export default PostBox;
