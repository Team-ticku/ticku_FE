import NewsCard from "../../components/common/NewsCard";
import styled from "styled-components";
import CompanyInfo from "../../components/information/CompanyInfo";
import VolumeInfo from "../../components/information/VolumeInfo";
import React from "react";

function NewsPage({ chartData, newsData }) {
  return (
    <div>
      <CompanyInfo
        name={chartData.name}
        code={chartData.code}
        price={chartData.price}
        change={chartData.change}
      />
      <VolumeInfo title="뉴스"></VolumeInfo>
      <div>
        {/* newsData 배열을 map 함수로 순회하며 NewsCard 렌더링 */}
        {newsData &&
          newsData.map((newsItem, index) => (
            <NewsCard
              key={index} // 각 NewsCard에 고유한 key prop 전달 (React 권장 사항)
              title={newsItem.title}
              content={newsItem.content}
              hasImage={newsItem.hasImage}
              image={newsItem.image}
              sourceName={newsItem.sourceName}
              sourceImage={newsItem.sourceImage}
              defaultBookmarked={newsItem.defaultBookmarked}
            />
          ))}
      </div>
    </div>
  );
}

export default NewsPage;
