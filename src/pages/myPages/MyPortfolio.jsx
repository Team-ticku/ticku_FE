import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BackButton from "../../components/common/BackButton";
import MyPortfolioAccordion from "../../components/myPages/MyPortfolioAccordion";

const PageContainer = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 10px;
`;
const PageTitle = styled.p`
  font-size: 27px;
  margin: 0;
  padding: 0;
`;

function MyPortfolio() {
  // 각 포트폴리오가 열려 있는지 여부를 관리하는 상태
  const [openPortfolio, setOpenPortfolio] = useState(null);
  const [portfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    const portfolioListEX = [
      { id: 1, isPinned: false, name: "내 포트폴리오 1" },
      { id: 2, isPinned: false, name: "내 포트폴리오 2" },
      { id: 3, isPinned: false, name: "내 포트폴리오 3" },
      { id: 4, isPinned: false, name: "내 포트폴리오 4" },
      { id: 5, isPinned: false, name: "내 포트폴리오 5" },
    ];
    setPortfolioList(portfolioListEX);
  }, []);

  // 포트폴리오의 내용을 열거나 닫는 함수
  const handleToggle = (id) => {
    setOpenPortfolio((prev) => (prev === id ? null : id));
  };

  // 핀을 누르면 상태가 업데이트되고, 이에 따라 컴포넌트가 리렌더링된다.
  const handlePinned = (id) => {
    setPortfolioList((prevList) =>
      prevList.map(
        (item) =>
          item.id === id
            ? { ...item, isPinned: !item.isPinned } // 클릭한 포트폴리오는 핀을 고정
            : { ...item, isPinned: false } // 나머지는 핀을 해제
      )
    );
  };

  // 핀이 선택된 포폴은 맨 위로 고정
  const sortedPorfolist = [
    ...portfolioList.filter((prev) => prev.isPinned),
    ...[...portfolioList].reverse().filter((prev) => !prev.isPinned),
  ];

  return (
    <>
      <PageContainer>
        <BackButton width="40" link="/mypage" />
        <PageTitle>관심 기업</PageTitle>
      </PageContainer>

      {sortedPorfolist.map((item) => (
        <MyPortfolioAccordion
          key={item.id}
          id={item.id}
          isPinned={item.isPinned}
          name={item.name}
          isOpen={openPortfolio === item.id}
          handleToggle={handleToggle}
          handlePinned={handlePinned}
        />
      ))}
    </>
  );
}

export default MyPortfolio;
