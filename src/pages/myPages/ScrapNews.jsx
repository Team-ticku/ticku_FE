import { useEffect, useState } from "react";
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
        `http://localhost:5000/scrapnews?userId=${userId}`
        //`http://localhost:5000/scrapnews`
      );
      const data = await response.json();
      setNewsList(data); // 가져온 데이터로 newsList 업데이트
      console.log(data);
    } catch (error) {
      console.error("뉴스 데이터를 가져오는 데 실패했습니다.", error);
    }
  };

  useEffect(() => {
    fetchNews(); // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
  }, []); // 초기 렌더링 시 한 번만 실행

  const handleBookmarkToggle = async (newsId) => {
    console.log("newsId : " + newsId);

    if (!newsId) {
      console.error("삭제할 뉴스 ID가 없습니다.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/scrapnews?newsId=${newsId}`,
        {
          method: "DELETE",
          //headers: { "Content-Type": "application/json" },
          //body: JSON.stringify({ newsId }),
        }
      );
      if (response.ok) {
        // 삭제 후 뉴스 목록을 갱신합니다.
        setNewsList((prevNewsList) =>
          prevNewsList.filter((item) => item._id !== newsId)
        );
      } else {
        console.error("북마크 삭제 실패");
      }
    } catch (error) {
      console.error("북마크 삭제 중 오류 발생", error);
    }
  };

  /*const list = [
    {
      id: 1,
      title: "기사 제목1",
      content: "기사 내용1",
      hasImage: true,
      image: "",
      sourceImage: "",
      sourceName: "언론사1",
      defaultBookmarked: true,
    },
    {
      id: 2,
      title: "기사 제목2",
      content: "기사 내용2",
      hasImage: false,
      image: "",
      sourceImage: "",
      sourceName: "언론사2",
      defaultBookmarked: true,
    },
  ];*/

  /*useEffect(() => {
    setNewsList(list);
  }, []);*/

  return (
    <>
      <PageContainer>
        <BackButton width="40" link="/mypage" />
        <PageTitle>스크랩한 뉴스</PageTitle>
      </PageContainer>

      {newsList.map((item) => {
        return (
          <NewsCard
            key={item._id}
            title={item.title} // 기사 제목
            content={item.content} // 기사 내용
            hasImage={item.hasImage} // 기사 사진 있는지 없는지
            image={item.image} // 기사 사진
            sourceName={item.sourceName} // 언론사 이름
            sourceImage={item.sourceImage} // 언론사 로고
            defaultBookmarked={item.defaultBookmarked} // 북마크 되어있는지 없는지
            handleBookmarkToggle={() => handleBookmarkToggle(item._id)} // 클릭되면 db에서 삭제(아직 작동 안 됨)
          />
        );
      })}
    </>
  );
}

export default ScrapNews;
