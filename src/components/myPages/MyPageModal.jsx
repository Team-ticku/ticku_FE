import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
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

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
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
  z-index: 11;
  /* animation: ${slideUp} 0.3s ease-out forwards; */
  animation: ${(props) => (props.isClosing ? slideDown : slideUp)} 0.3s ease-out
    forwards;
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

  const [isClosing, setIsClosing] = useState(false); // 모달이 닫힐 때 애니메이션을 위해 추가
  const [updateName, setUpdateName] = useState(userName);
  const [updateImg, setUpdateImg] = useState(userImage);

  const [sampleImg, setSampleImg] = useState(userImage); // 편집모드일 때 보여주는 샘플 이미지
  const [isEditing, setIsEditing] = useState(false);

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setSampleImg(imgUrl);
      setUpdateImg(file);
    }
  };

  // 이름 변경 함수
  const handleNameChange = (event) => {
    setUpdateName(event.target.value);
  };
  // 연필 버튼 클릭 시 편집 모드 전환
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // 수정하기 완료 버튼 클릭 시 편집 모드 종료
  const handleSaveClick = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("userId가 없습니다.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("name", updateName);

      if (updateImg instanceof File) {
        formData.append("image", updateImg);
      }

      const response = await fetch(
        `http://localhost:5000/user/profile-change`,
        {
          method: "PUT",
          //headers: { "Content-Type": "application/json" },
          //body: JSON.stringify({ userId, name: updateName, image: updateImg }),
          body: formData,
        }
      );

      const updateUser = await response.json();
      console.log(updateUser);
      console.log(updateUser.image);

      if (response.ok) {
        setUpdateName(updateUser.name);
        setUpdateImg(updateUser.image);
        setIsEditing(false);
      } else {
        console.error("프로필 업데이트 실패");
      }
    } catch (err) {
      console.error("프로필 업데이트 중 오류 발생", err);
    }
  };

  // 백그라운드 클릭 시 모달 닫기
  const handleBackdropClick = () => {
    setIsClosing(true); // 모달 닫을 때 애니메이션 실행
    setTimeout(() => {
      setIsClosing(false);
      onClose(); // 애니메이션 후 모달 닫기
    }, 300); // 애니메이션 시간(0.3초) 후에 모달을 닫음
  };

  return (
    <>
      <Backdrop onClick={handleBackdropClick}>
        <Modal isClosing={isClosing} onClick={(e) => e.stopPropagation()}>
          {isEditing ? (
            // 편집 모드일 때
            <ProfileContainer>
              <label>
                <ProfileImg
                  src={
                    sampleImg // 사용자가 이미지를 선택한 경우
                      ? sampleImg
                      : updateImg // `updateImg`가 있으면 그 이미지를 보여줌
                      ? `http://localhost:5000${updateImg}` // 서버에서 받아온 이미지
                      : "/images/profile_picture.png" // 기본 이미지
                  }
                  alt="프로필 이미지"
                />
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
                src={
                  updateImg
                    ? `http://localhost:5000${updateImg}`
                    : "/images/profile_picture.png"
                }
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
              <NameInput
                type="text"
                value={updateName}
                onChange={handleNameChange}
              />
              <SaveButton onClick={handleSaveClick}>수정하기</SaveButton>
            </div>
          ) : (
            <NameText>{updateName}</NameText>
          )}
        </Modal>
      </Backdrop>
    </>
  );
}

export default MyPageModal;
