import React from "react";
import styled from "styled-components";

// 스타일링 부분
const Div = styled.div`
  display: flex;
  padding-left: 10px;
`;

const StyledText = styled.p`
  font-size: 13px; /* 폰트 크기 증가 */
  font-weight: 500;
  color: #ffffff82;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
`;

const Spacer = styled.div`
  width: 20px; /* 날짜와 시간 사이에 큰 공백 추가 */
`;

function CommentDate({ comment }) {
  const date = comment.createdAt.slice(0, 10); // 날짜 부분
  const hour = comment.createdAt.slice(11, 13); // 시간 부분
  const min = comment.createdAt.slice(14, 16);

  return (
    <Div>
      <StyledText>작성일 : {date}</StyledText>
      <Spacer />
      <StyledText>
        작성시간: {hour}시 {min}분
      </StyledText>
    </Div>
  );
}

export default CommentDate;
