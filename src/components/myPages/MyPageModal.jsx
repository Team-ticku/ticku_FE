import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(5px) brightness(0.7);
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Modal = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  height: 380px;
  border-radius: 50px 50px 0 0;
  text-align: center;
  z-index: 2;
  animation: ${slideUp} 0.3s ease-out forwards;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 150px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

const FileInput = styled.input`
  display: none;
`;

const EditButton = styled.button`
  border: none;
  background: none;
  bottom: 0px;
  right: 0px;
  position: absolute;
  height: 45px;
`;

const PencilImg = styled.img`
  width: 45px;
`;

const NameInput = styled.input`
  font-size: 35px;
  text-align: center;
  border: none;
  outline: none;
  border-bottom: 2px #b2c4df solid;
  margin-top: 2px;
  width: 70%;
`;

const NameText = styled.p`
  margin: 0;
  font-size: 35px;
`;

const SaveButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #b2c4df;
  color: #ffffff;
  font-size: 16px;
  border: none;
`;

function MyPageModal({ isOpen, onClose, userName, userImage }) {
  if (!isOpen) return null;

  const [name, setName] = useState(userName);
  const [profileImg, setProfileImg] = useState(userImage);
  const [isEditing, setIsEditing] = useState(false);

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setProfileImg(imgUrl);
    }
  };

  // 이름 변경 함수
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // 연필 버튼 클릭 시 편집 모드 전환
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // 수정하기 완료 버튼 클릭 시 편집 모드 종료
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Backdrop onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            // 편집 모드일 때
            <ProfileContainer>
              <label>
                <ProfileImg src={profileImg} alt="프로필 이미지" />
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={handleImgChange}
                />
              </label>
            </ProfileContainer>
          ) : (
            // 편집 모드 아닐 때
            <ProfileContainer>
              <ProfileImg
                src="/images/profile_picture.png"
                alt="프로필 이미지"
              />

              <EditButton onClick={handleEditClick}>
                <PencilImg src="/images/pencilicon.png" alt="수정 버튼" />
              </EditButton>
            </ProfileContainer>
          )}

          {/* 사용자 이름 */}
          {isEditing ? (
            <div>
              <NameInput type="text" value={name} onChange={handleNameChange} />
              <SaveButton onClick={handleSaveClick}>수정하기</SaveButton>
            </div>
          ) : (
            <NameText>{name}</NameText>
          )}
        </Modal>
      </Backdrop>
    </>
  );
}

export default MyPageModal;
