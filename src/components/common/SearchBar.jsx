// SearchBar.jsx
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
// import yahooFinance from "yahoo-finance2"; // yahooFinance는 이제 여기서 필요 없음

const Div = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 5;
`;

const Box = styled.div`
  background-color: #eeeded;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  height: 50px;
  width: 300px;
`;

const SearchIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 30px;
`;

const StyledTextInput = styled.input`
  margin-top: 3px;
  width: 60%;
  height: 10px;
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  outline: none;
`;

const SearchResults = styled.ul`
  position: absolute;
  font-size: 18px;
  top: 55px;
  background: white;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
`;

const SearchResultItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:active {
    background-color: #f0f0f0;
  }
`;

function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const fetchSearchResults = debounce(async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/search?query=${searchQuery}`
      );
      const data = await response.json();

      if (response.status === 404 || data.length === 0) {
        setResults([]);
      } else {
        setResults(data);
      }
    } catch (error) {
      console.error("검색 API 요청 중 오류 발생: ", error);
      setResults([]);
    }
  }, 300);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && query) {
      try {
        const searchResponse = await fetch(
          `http://localhost:5000/search?query=${query}`
        );
        const searchData = await searchResponse.json();

        if (searchResponse.status === 404 || searchData.length === 0) {
          setQuery("");
          setResults([]);
          alert("검색 결과가 없습니다.");
          return;
        }

        // 2. 회사 정보 가져오기 (companyInfo API)
        const corpCode = searchData[0].corp_code;
        const stockName = searchData[0].corp_name; // 회사이름도 전달
        const stockCode = searchData[0].stock_code;

        const companyInfoResponse = await fetch(
          `http://localhost:5000/companyInfo/${corpCode}` // 수정된 부분
        );

        const companyInfoData = await companyInfoResponse.json();

        if (companyInfoResponse.status !== 200) {
          alert("회사 정보를 가져오는 데 실패했습니다."); // 또는 다른 오류 처리
          return;
        }

        // 3. 연간 실적 가져오기
        const yearResultResponse = await fetch(
          `http://localhost:5000/yearResult/${corpCode}`
        );
        const yearResultData = await yearResultResponse.json();

        if (!yearResultResponse.ok) {
          alert("연간 실적 정보를 가져오는 데 실패했습니다.");
          return;
        }

        // 4. navigate (with companyInfoData)
        navigate(`/information/search`, {
          state: {
            stockCode,
            stockName, // 여전히 필요
            financeData: {
              // financeData 객체 전달
              ceo: companyInfoData.대표이사,
              establishedDate: companyInfoData.설립일,
              stockCode: companyInfoData.종목코드,
              homepage: companyInfoData.홈페이지,
            },
            yearResultData,
          },
        });
      } catch (error) {
        console.error("검색 요청 중 오류 발생:", error);
        alert("검색 중 오류가 발생했습니다.");
      }
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchSearchResults(e.target.value);
  };

  const handleSelectResult = (company) => {
    setQuery(company.corp_name);
    setResults([]);
    //  여기를 handleKeyDown과 비슷하게 구현해도 됩니다 (선택 사항)
  };

  return (
    <Div>
      <Box>
        <SearchIcon src="/images/search.png" alt="Search Icon" />
        <StyledTextInput
          ref={inputRef}
          placeholder="종목 검색"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Box>
      {results.length > 0 && (
        <SearchResults>
          {results.map((company) => (
            <SearchResultItem
              key={company.id}
              onClick={() => handleSelectResult(company)}
            >
              {company.corp_name}
            </SearchResultItem>
          ))}
        </SearchResults>
      )}
    </Div>
  );
}

export default SearchBar;
