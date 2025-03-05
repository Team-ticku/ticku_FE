import BookMark from "../../components/common/BookMark";
import styled from "styled-components";

// 카드 컨테이너
const NewsCardWrapper = styled.div`
  width: 80%;
  border-radius: 20px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 8px 20px RGB(112, 140, 176, 0.2);
  border: none;
  margin-top: 20px;
`;

// 뉴스 카드 왼쪽 섹션
const LeftSection = styled.div`
  width: ${(props) => (props.$hasImage ? "66%" : "100%")};
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

// 뉴스 내용
const NewsContent = styled.p`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  color: #494949;
`;

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SourceIcon = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 100%;
`;

const SourceName = styled.p`
  margin: 0;
  margin-left: 10px;
  font-size: 12px;
  color: #6e6e6e;
`;

// 카드 오른쪽 섹션
const RightSection = styled.div`
  width: 34%;
  display: ${(props) => (props.$hasImage ? "block" : "none")};
`;

const BookmarkContainer = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
`;

const ArticleImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function NewsCard({
  title,
  content,
  hasImage,
  image,
  sourceName,
  sourceImage,
  defaultBookmarked,
}) {
  return (
    <>
      <div>
        <NewsCardWrapper>
          {/* 왼쪽 내용 */}
          <LeftSection $hasImage={hasImage}>
            <NewsTitle>{title}</NewsTitle>
            <NewsContent>{content}</NewsContent>

            <SourceContainer>
              <SourceIcon src={sourceImage} />
              <SourceName>{sourceName}</SourceName>
            </SourceContainer>
          </LeftSection>

          <BookmarkContainer>
            <BookMark defaultBookmarked={defaultBookmarked} />
          </BookmarkContainer>

          {/* 오른쪽 내용 */}
          <RightSection $hasImage={hasImage}>
            <ArticleImage src={image} />
          </RightSection>
        </NewsCardWrapper>
      </div>
    </>
  );
}

export default NewsCard;
