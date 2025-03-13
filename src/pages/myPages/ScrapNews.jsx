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

function ScrapNews() {
  const [newsList, setNewsList] = useState([]);

  const navigate = useNavigate();

  /*useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);*/

  // 스크랩한 뉴스를 가져오는 함수
  const fetchNews = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("유저 ID가 없습니다.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/user/scrapnews?userId=${userId}`
      );
      const data = await response.json();
      setNewsList(data);
    } catch (error) {
      console.error("뉴스 데이터를 가져오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // DB에서 삭제하는 함수
  const handleBookmarkToggle = useCallback(async (newsId, isBookmarked) => {
    if (isBookmarked) {
      try {
        const response = await fetch(
          `http://localhost:5000/user/delete-scrapnews`,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newsId }),
          }
        );
        fetchNews();
      } catch (error) {
        console.error("북마크 삭제 중 오류 발생", error);
      }
    }
  }, []);

  return (
    <>
      <PageContainer>
        <BackButton width="40" height="40" link="/mypage" />
        <PageTitle>스크랩한 뉴스</PageTitle>
      </PageContainer>

      {newsList.map((item) => {
        return (
          <NewsCard
            key={item._id}
            title={item.title} // 기사 제목
            content={item.content} // 기사 내용
            hasImage={item.hasImage} // 기사 사진 있는지 없는지
            image={`http://localhost:5000${item.image}`} // 기사 사진
            sourceName={item.sourceName} // 언론사 이름
            sourceImage={`http://localhost:5000${item.sourceImage}`} // 언론사 로고
            defaultBookmarked={item.defaultBookmarked} // 북마크 되어있는지 없는지
            onBookmarkToggle={() =>
              handleBookmarkToggle(item._id, item.defaultBookmarked)
            }
          />
        );
      })}
    </>
  );
}

export default ScrapNews;
