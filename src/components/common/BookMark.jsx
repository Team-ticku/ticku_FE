import { useState } from "react";
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
  const [isBookMarkded, setIsBookMarked] = useState(isMarked);

  function changeBookMark() {
    setIsBookMarked((prev) => !prev);
    onBookmarkToggle();
  }

  return (
    <>
      <Button onClick={changeBookMark}>
        {isBookMarkded ? (
          <Img src="/images/bookmarked.png"></Img>
        ) : (
          <Img src="/images/unbookmarked.png"></Img>
        )}
      </Button>
    </>
  );
}

export default BookMark;
