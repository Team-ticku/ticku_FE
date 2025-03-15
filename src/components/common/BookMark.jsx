// BookMark.jsx (수정)
import React from "react"; // useState 제거
import styled from "styled-components";

const Img = styled.img`
  width: 35px;
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

function BookMark({ width, height, isMarked, onBookmarkToggle }) {
  // isMarked prop을 사용.  내부 상태를 사용하지 않음.

  return (
    <>
      <Button onClick={onBookmarkToggle}>
        {isMarked ? (
          <Img src="/images/bookmarked.png"></Img>
        ) : (
          <Img src="/images/unbookmarked.png"></Img>
        )}
      </Button>
    </>
  );
}

export default BookMark;
