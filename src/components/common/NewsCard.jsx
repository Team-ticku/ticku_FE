// NewsCard.jsx
import React from "react";
import BookMark from "../../components/common/BookMark";
import styled from "styled-components";

const NewsCardWrapper = styled.div`
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  padding: 20px 15px 10px 15px;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 8px 20px RGB(112, 140, 176, 0.2);
  border: none;
  margin-top: 20px;
`;

// 뉴스 카드 왼쪽 섹션
const LeftSection = styled.div`
  width: 100%;
`;

const NewsTitle = styled.p`
  margin: 0;
  font-size: 16px;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 90%;
  color: #2a343d;
`;

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SourceName = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 12px;
  color: #6e6e6e;
`;

// 카드 오른쪽 섹션
const RightSection = styled.div`
  width: 20%;
  /* display: ${(props) => (props.$hasImage ? "block" : "none")}; */
`;

const BookmarkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

function NewsCard({
  title,
  link,
  pubDate, // 이 prop 사용
  hasImage,
  sourceName,
  defaultBookmarked,
  onBookmarkToggle,
}) {
  // pubDate를 Date 객체로 변환 (에러 처리 추가)
  let formattedDate = "";
  try {
    const date = new Date(pubDate);
    if (!isNaN(date)) {
      formattedDate = date.toLocaleDateString("ko-KR"); // YYYY년 MM월 DD일
    } else {
      formattedDate = "날짜 정보 없음"; //혹은 빈 문자열: ""
    }
  } catch (error) {
    console.error("Invalid date format:", pubDate);
    formattedDate = "날짜 정보 없음"; // 또는 다른 기본값
  }

  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer"); // 새 탭에서 열기
  };
  return (
    <NewsCardWrapper>
      {/* 왼쪽 내용 */}

      <LeftSection $hasImage={hasImage}>
        <A href={link} target="_blank" rel="noopener noreferrer">
          {/* 제목과 내용을 묶는 div */}
          <NewsTitle>{title}</NewsTitle>
          {/* <NewsContent>{content}</NewsContent> */}

          <SourceContainer>
            {/* {sourceImage && <SourceIcon src={sourceImage} />} */}
            <SourceName>{sourceName}</SourceName>
          </SourceContainer>
          {pubDate && <p>발행일: {formattedDate}</p>}
        </A>
      </LeftSection>
      {/* 북마크 */}
      <BookmarkContainer>
        <BookMark
          isMarked={defaultBookmarked}
          onBookmarkToggle={onBookmarkToggle}
        />
      </BookmarkContainer>
      {/* 오른쪽 내용 (이미지) */}
      {/* hasImage가 true일 때만 이미지 표시 */}
      {/* {hasImage && ( */}
      <RightSection>{/* <ArticleImage src={image} /> */}</RightSection>
    </NewsCardWrapper>
  );
}

export default NewsCard;
