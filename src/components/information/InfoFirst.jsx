import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  width: 350px;
  height: 450px;
  background-color: rgba(178, 196, 223, 0.22);
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-direction: column;
`;

const Character = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const ContentText = styled.p`
  font-size: 25px;
`;

function FirstContent() {
  return (
    <ContentDiv>
      <Character src="../public/images/Information/InformationContentCharacter.PNG"></Character>
      <ContentText>궁금한 기업, 바로 검색!</ContentText>
    </ContentDiv>
  );
}

export default FirstContent;
