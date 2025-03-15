import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 390px;
  height: 50px;
  position: fixed;
  bottom: 66px;
  background-color: #b2c4df;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const PictureBox = styled.div`
  display: flex;
  height: 48px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex: 1;
`;

const Picture = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledText = styled.p`
  color: white;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`;

const Check = styled.img`
  width: 24px;
  height: 24px;
`;

function BottomBar({ handleImageChange, handleAnonymousChange, anonymous }) {
  const [imageName, setImageName] = useState("사진");
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.click();

    input.onchange = () => {
      const file = input.files[0];
      if (file) {
        setImageName(file.name);
        setImageSelected(true);
        handleImageChange(file);
      }
    };
  };

  const handleCheckClick = () => {
    const newAnonymousState = !anonymous;
    handleAnonymousChange(newAnonymousState); // 부모 컴포넌트에 익명 상태 전달
  };

  return (
    <Div>
      <PictureBox onClick={handleImageClick}>
        <Picture
          src={
            imageSelected
              ? "../../../../public/images/photo-gallery-fill.png"
              : "../../../../public/images/photo-gallery.png"
          }
        />
        <StyledText>{imageName}</StyledText>
      </PictureBox>
      <PictureBox onClick={handleCheckClick} style={{ paddingLeft: 120 }}>
        <Check
          src={
            anonymous
              ? "../../../../public/images/check-box-fill.png"
              : "../../../../public/images/check-box.png"
          }
        />
        <StyledText>익명</StyledText>
      </PictureBox>
    </Div>
  );
}

export default BottomBar;
