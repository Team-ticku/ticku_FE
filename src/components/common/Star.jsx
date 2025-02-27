import { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 25px;
`;

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
`;

function Star() {
  const [isStarred, setIsStarred] = useState(false);

  function changeStar() {
    setIsStarred((prev) => !prev);
  }

  return (
    <>
      <Button onClick={changeStar}>
        {isStarred ? (
          <Img src="/images/star-filled.png"></Img>
        ) : (
          <Img src="/images/star-empty.png"></Img>
        )}
      </Button>
    </>
  );
}

export default Star;
