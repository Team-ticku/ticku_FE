import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 65px;
  position: fixed;
  background: #b2c4df;
  bottom: 50px;
  width: 100%;
  display: flex;
`;

const PictureBox = styled.div`
  display: flex;
  margin: 0 17px;
  height: 48px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
const Picture = styled.img`
  width: 30px;
  height: 30px;
`;
const StyledText = styled.p`
  color: white;
  font-size: 20px;
  padding-top: 3px;
`;

const Check = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 4px;
`;
function BottomBar() {
  return (
    <Div>
      <PictureBox>
        <Picture src="../../../../public/images/photo-gallery.png" />
        <StyledText>사진</StyledText>
      </PictureBox>
      <PictureBox style={{ marginLeft: "200px" }}>
        <Check src="../../../../public/images/checkbox.png" />
        <StyledText>익명</StyledText>
      </PictureBox>
    </Div>
  );
}

export default BottomBar;
