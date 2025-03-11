import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 66px;
  background-color: #b2c4df;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  gap: 200px;
`;

const PictureBox = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const Picture = styled.img`
  width: 30px;
  height: 30px;
`;
const StyledText = styled.p`
  color: white;
  font-size: 20px;
  white-space: nowrap;
`;

const Check = styled.img`
  width: 24px;
  height: 24px;
`;
function BottomBar() {
  return (
    <Div>
      <PictureBox>
        <Picture src="../../../../public/images/photo-gallery.png" />
        <StyledText>사진</StyledText>
      </PictureBox>
      <PictureBox>
        <Check src="../../../../public/images/checkbox.png" />
        <StyledText>익명</StyledText>
      </PictureBox>
    </Div>
  );
}

export default BottomBar;
