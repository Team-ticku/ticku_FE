import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/* 

Post.jsx 

글 제목 + 내용 + 첨부한 이미지를 포함한 div 
- `title`, `content`, `imageUrl`을 props로 받아 해당 내용을 표시하는 컴포넌트
- `imageUrl`이 있을 경우 이미지를 표시하고, 없으면 이미지가 표시되지 않음

*/

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 15px 0;
`;

const Content = styled.p`
  margin-top: 0;
  font-size: 18px;
  font-weight: 400;
`;

const Picture = styled.img`
  width: 100%;
  height: auto;
`;

function Post(props) {
  const { title, content, imageUrl } = props;

  return (
    <Div>
      <Title>{title}</Title>
      <Content>{content}</Content>
      {imageUrl ? <Picture src={imageUrl} /> : null}
    </Div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Post;
