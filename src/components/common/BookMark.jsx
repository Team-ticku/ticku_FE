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

function BookMark({ width, height, defaultBookmarked }) {
  const [isBookMarkded, setIsBookMarked] = useState(defaultBookmarked);

  function changeBookMark() {
    setIsBookMarked((prev) => !prev);
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
