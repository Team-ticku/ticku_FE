import MyPageTable from "../../components/myPages/MyPageTable";
import UserProfile from "../../components/common/UserProfile";
import MyPageModal from "../../components/myPages/MyPageModal";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";

import styled from "styled-components";
import { useState } from "react";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  margin: 10px 20px 0px 20px;
`;

const Hr = styled.hr`
  height: 20px;
  background-color: #f1f5f9;
  border: none;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #b2c4df;
  border: none;
  border-radius: 10px;
  height: 45px;
  padding: 0px 15px;
`;

function MyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Div>
        <UserProfile width="40" name="익명1" fontsize="28" />
        <Button onClick={openModal}>회원정보</Button>
      </Div>
      <Hr />
      <MyPageTable
        link="/mypage/scrapnews"
        src="/images/scrapicon.png"
        text="뉴스 스크랩"
      />
      <MyPageTable
        link="/mypage/favorites"
        src="/images/staricon.png"
        text="관심 기업 목록"
      />
      <MyPageTable src="/images/portfolioicon.png" text="내 포트폴리오" />
      <MyPageModal
        isOpen={modalOpen}
        onClose={closeModal}
        userName="익명1"
        userImage="/images/profile_picture.png"
      />

      <BottomNavBar />
    </>
  );
}
export default MyPage;
