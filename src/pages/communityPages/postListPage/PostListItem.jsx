import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import UserProfile from "../../../components/common/UserProfile";
import Stats from "../../../components/communityPage/postListPage/Stats";
import Tags from "../../../components/communityPage/postListPage/Tags";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 10px solid #b2c4df22;
  cursor: pointer;
  background: white;
  :active {
    background: lightgrey;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
`;
const Thumbnail = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-left: 16px;
`;

const ContextContainer = styled.div`
  margin: 0 5px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const TitleText = styled.p`
  padding-left: 5px;
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: 500;
`;

const ContentText = styled.p`
  padding-left: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 260px;
`;

function PostListItem(props) {
  const { post, onClick } = props;

  const handleDivClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Div onClick={handleDivClick}>
      <Tags tag={post.tag} />
      <Box>
        <UserProfile
          userId={post.userId}
          height={40}
          width={40}
          fontsize={18}
        />
        <Stats
          likesCount={post.userLikes.length}
          commentsCount={post.commentsCount}
        />
      </Box>

      <ContextContainer>
        <TextContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </TextContainer>
        {post.image && <Thumbnail src={post.image} />}
      </ContextContainer>
    </Div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    userId: PropTypes.number,
    userLikes: PropTypes.array,
    commentsCount: PropTypes.number,
    tag: PropTypes.string,
  }),
  onClick: PropTypes.func,
  onLikeClick: PropTypes.func,
};

export default PostListItem;
