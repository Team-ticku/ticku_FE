import React from "react";
import styled from "styled-components";

// 스타일링 부분
const Div = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;
  display: flex;
  padding: 0 26px;
`;

const StyledText = styled.p`
  font-size: 15px; /* 폰트 크기 증가 */
  font-weight: 500;
  color: #ffffff82;
`;

const Spacer = styled.div`
  width: 20px; /* 날짜와 시간 사이에 큰 공백 추가 */
`;

function PostDate({ post }) {
  // UTC 시간을 한국 시간으로 변환
  const postTime = new Date(post.updatedAt);
  const koreaTimeOffset = 9 * 60 * 60 * 1000; // 한국은 UTC+9
  postTime.setMinutes(postTime.getMinutes() + koreaTimeOffset);

  // 날짜와 시간 추출
  const date = postTime.toISOString().slice(0, 10); // 날짜 부분 (YYYY-MM-DD)
  const hour = postTime.getHours().toString().padStart(2, "0"); // 시간 부분 (HH)
  const min = postTime.getMinutes().toString().padStart(2, "0"); // 분 부분 (MM)
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

export default PostDate;
