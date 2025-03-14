// NewsPage.jsx
import React from "react";
import NewsCard from "../../components/common/NewsCard"; // NewsCard import
import VolumeInfo from "../../components/information/VolumeInfo";
import styled from "styled-components";

const NewsContainer = styled.div`
  /* padding: 10px; */
`;

function NewsPage({ newsData }) {
  return (
    <div>
      <VolumeInfo title="뉴스" />
      <NewsContainer>
        {newsData && newsData.length > 0 ? (
          newsData.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              content={item.content}
              link={item.link}
              pubDate={item.pubDate}
              hasImage={item.hasImage}
              image={item.image}
              sourceName={item.sourceName}
              sourceImage={item.sourceImage}
              defaultBookmarked={item.defaultBookmarked}
            />
          ))
        ) : (
          <p>뉴스를 불러오는 중...</p>
        )}
      </NewsContainer>
    </div>
  );
}

export default NewsPage;
