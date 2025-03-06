import { useState } from "react";
import BackButton from "../../components/common/BackButton";
import NewsCard from "../../components/common/NewsCard";
import styled from "styled-components";

// 맨 위 이름있는 곳
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

function ScrapNews() {
  const newslist = [
    {
      id: 1,
      title: "기사 제목1",
      content: "기사 내용1",
      hasImage: true,
      //sourceImage: "",
      sourceName: "언론사1",
      defaultBookmarked: true,
    },
    {
      id: 2,
      title: "기사 제목2",
      content: "기사 내용2",
      hasImage: false,
      //sourceImage: "",
      sourceName: "언론사2",
      defaultBookmarked: true,
    },
  ];

  return (
    <>
      <PageContainer>
        <BackButton width="40" link="/mypage" />
        <PageTitle>스크랩한 뉴스</PageTitle>
      </PageContainer>

      {newslist.map((item) => {
        return (
          <NewsCard
            key={item.id}
            title={item.title}
            content={item.content}
            hasImage={item.hasImage}
            sourceName={item.sourceName}
            defaultBookmarked={item.defaultBookmarked}
          />
        );
      })}
    </>
  );
}

export default ScrapNews;
