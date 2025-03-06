import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import BackButton from "../../components/common/BackButton";
import CompanyList from "../../components/information/CompanyList";

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

function FavoriteCompanies() {
  //const [companies, setCompanies] = useState([]);

  const companies = [
    {
      id: 1,
      name: "삼성전자",
      logo: "../../../public/images/Information/삼성전자.png",
      isFavorite: true,
    },
    {
      id: 2,
      name: "LG 전자",
      logo: "../../../public/images/Information/lg전자.png",
      isFavorite: true,
    },
  ];

  // 백엔드랑 연결할 때 사용하면 될 듯
  // 회사 목록을 가져오는 함수
  /*const fetchCompanies = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/companies");
      const data = await response.json();
      setCompanies(data); // MongoDB에서 가져온 데이터를 상태에 설정
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);*/

  // isFavorite 값을 반전시키는 역할
  const handleToggleFavorite = useCallback((id) => {
    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === id
          ? { ...company, isFavorite: !company.isFavorite }
          : company
      )
    );
  }, []);

  return (
    <>
      <PageContainer>
        <BackButton width="40" link="/mypage" />
        <PageTitle>관심 기업</PageTitle>
      </PageContainer>

      {companies.map((company) => {
        return (
          <CompanyList
            key={company.id}
            company={{ ...company, onToggleFavorite: handleToggleFavorite }}
          />
        );
      })}
    </>
  );
}

export default FavoriteCompanies;
