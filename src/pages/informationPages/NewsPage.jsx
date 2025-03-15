// NewsPage.jsx
import React from "react";
import NewsCard from "../../components/common/NewsCard"; // NewsCard import
import VolumeInfo from "../../components/information/VolumeInfo";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NewsContainer = styled.div``;

function NewsPage({ newsData }) {
  const location = useLocation();
  const { userId } = location.state || {}; // userId를 여기서 가져옵니다.
  // userId가 null 또는 undefined일 때 빈 배열([])을 할당
  const safeNewsData = newsData || [];

  return (
    <div>
      <VolumeInfo title="뉴스" />
      <NewsContainer>
        {safeNewsData.length > 0 ? (
          safeNewsData.map(
            (
              item // map함수에 key 추가
            ) => (
              <NewsCard
                key={item.link} // link를 고유한 key로 사용.  API에서 제공하는 고유 ID가 있다면 그것을 사용하는 것이 더 좋음.
                title={item.title}
                link={item.link}
                pubDate={item.pubDate}
                sourceName={item.sourceName}
                defaultBookmarked={item.defaultBookmarked}
                userId={userId} // userId를 NewsCard에 전달
              />
            )
          )
        ) : (
          <p>뉴스를 불러오는 중...</p>
        )}
      </NewsContainer>
    </div>
  );
}

export default NewsPage;
