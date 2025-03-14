import { useCallback, useEffect, useState } from "react";
import BackButton from "../../components/common/BackButton";
import NewsCard from "../../components/common/NewsCard";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

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

/*useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);*/

// 스크랩한 뉴스를 가져오는 함수
function ScrapNews() {
  const [newsList, setNewsList] = useState([]);
  const navigate = useNavigate();

  // 스크랩한 뉴스를 가져오는 함수
  const fetchNews = useCallback(async () => {
    // useCallback 사용
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("유저 ID가 없습니다.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/user/scrapnews?userId=${userId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNewsList(data);
    } catch (error) {
      console.error("뉴스 데이터를 가져오는 데 실패했습니다.", error);
    }
  }, []); // 의존성 배열 비움 (fetchNews는 이제 외부 변수에 의존하지 않음)

  useEffect(() => {
    fetchNews();
  }, [fetchNews]); // fetchNews를 의존성 배열에 추가

  // 삭제
  const handleDelete = useCallback(
    async (newsId) => {
      try {
        const response = await fetch(
          `http://localhost:5000/user/delete-scrapnews`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newsId }), // newsId만 전송
          }
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "뉴스 삭제 실패");
        }
        // 성공적으로 삭제되면, 다시 뉴스 목록을 가져옴
        fetchNews();
        alert("뉴스 스크랩이 취소되었습니다.");
      } catch (error) {
        console.error("북마크 삭제 중 오류 발생", error);
        alert(error.message);
      }
    },
    [fetchNews]
  ); // fetchNews를 의존성 배열에 추가

  return (
    <>
      <PageContainer>
        <BackButton width="40" height="40" link="/mypage" />
        <PageTitle>스크랩한 뉴스</PageTitle>
      </PageContainer>

      {newsList.map((item) => (
        <NewsCard
          key={item._id}
          title={item.title}
          link={item.link}
          pubDate={item.pubDate}
          sourceName={item.sourceName}
          defaultBookmarked={true} // 항상 true로 설정
          onBookmarkToggle={() => handleDelete(item._id)} // newsId만 전달
        />
      ))}
    </>
  );
}

export default ScrapNews;
