// NewsCard.jsx (최종 수정)
import React, { useState, useEffect } from "react";
import BookMark from "../../components/common/BookMark";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

// ... (스타일 컴포넌트들) ...
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
  pubDate,
  sourceName,
  defaultBookmarked,
  // onBookmarkToggle prop 제거
}) {
  // const location = useLocation();
  // const { userId } = location.state || {};
  const userId = localStorage.getItem("userId");
  const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

  // 날짜 형식 변환 함수 (NewsCard 컴포넌트 내부)
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (!isNaN(date)) {
        return date.toISOString(); // ISO 8601 형식으로 서버에 전송
      }
    } catch (error) {
      console.error("Invalid date format:", dateString);
    }
    return null; // 유효하지 않은 날짜는 null 반환
  };

  // 북마크 상태를 서버에 전송하는 함수
  const handleBookmarkToggle = async () => {
    // userId가 없으면(로그인이 안되어 있으면) 함수 실행 중단.
    if (!userId) {
      alert("로그인이 필요한 기능입니다."); // 경고창 표시
      return; // 함수 실행 중단
    }

    const formattedPubDate = formatDate(pubDate); // 날짜 형식 변환
    if (!formattedPubDate) {
      alert("날짜 형식이 올바르지 않습니다.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/user/scrapnews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId, // 사용자 ID (로그인 상태에 따라)
          title,
          link,
          pubDate: formattedPubDate, // 변환된 날짜 사용
          sourceName,
          isMarked: !isBookmarked, // 현재 상태의 반대
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // 에러 메시지 파싱
        throw new Error(errorData.message || "뉴스 스크랩/취소 실패");
      }

      // 성공적으로 처리되면, 클라이언트 상태 업데이트
      setIsBookmarked(!isBookmarked);

      // (선택 사항) 사용자에게 알림
      if (isBookmarked) {
        alert("뉴스 스크랩이 취소되었습니다.");
      } else {
        alert("뉴스가 스크랩되었습니다.");
      }
    } catch (error) {
      console.error("뉴스 스크랩/취소 중 오류:", error);
      alert(error.message);
    }
  };

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
      <LeftSection>
        <A href={link} target="_blank" rel="noopener noreferrer">
          <NewsTitle>{title}</NewsTitle>
          <SourceContainer>
            <SourceName>{sourceName}</SourceName>
          </SourceContainer>
          {pubDate && <p>발행일: {formattedDate}</p>}
        </A>
      </LeftSection>
      <BookmarkContainer>
        <BookMark
          isMarked={isBookmarked}
          onBookmarkToggle={handleBookmarkToggle}
        />
      </BookmarkContainer>
      <RightSection />
    </NewsCardWrapper>
  );
}

export default NewsCard;
