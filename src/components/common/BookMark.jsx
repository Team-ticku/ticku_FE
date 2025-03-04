import { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  ${(props) => props.height && `height: ${props.height}px;`};
  ${(props) => props.width && `width: ${props.width}px;`};
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
          <Img src="/images/bookmarked.png" width={width} height={height}></Img>
        ) : (
          <Img
            src="/images/unbookmarked.png"
            width={width}
            height={height}
          ></Img>
        )}
      </Button>
    </>
  );
}

export default BookMark;
