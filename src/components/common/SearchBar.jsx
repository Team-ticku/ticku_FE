import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const Div = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
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
  const [query, setQuery] = useState(""); // query로 상태 변경
  const [results, setResults] = useState([]); // 검색 결과
  const inputRef = useRef(null);
  const navigate = useNavigate(); // 검색 후 페이지 이동

  // 서버에서 검색 결과 가져오기 (디바운싱 적용)
  const fetchSearchResults = debounce(async (searchQuery) => {
    if (!searchQuery) {
      setResults([]); // 검색어가 없으면 결과를 초기화
      return;
    }

    try {
      console.log("검색 요청 전송:", searchQuery);

      const response = await fetch(
        `http://localhost:5000/search?query=${searchQuery}`
      );

      console.log(response);
      console.log("응답 상태:", response.status);

      const data = await response.json();

      console.log("서버 응답 데이터:", data);

      if (response.status === 404 || data.length === 0) {
        setResults([]); // 검색 결과 없을 때
      } else {
        setResults(data); // 검색 결과 업데이트
      }
    } catch (error) {
      console.error("검색 API 요청 중 오류 발생: ", error);
      setResults([]);
    }
  }, 300);

  // 키보드에서 Enter를 눌렀을 때
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && query) {
      try {
        const response = await fetch(
          `http://localhost:5000/search?query=${query}`
        );
        const data = await response.json();

        if (response.status === 404 || data[0].corp_name !== query) {
          setQuery("");
          setResults([]);

          alert("검색 결과가 없습니다."); // 검색 결과 없을 때 알림
        } else {
          navigate(""); // 검색 페이지로 이동
          setResults([]);
        }
      } catch (error) {
        console.error("검색 요청 중 오류 발생:", error);
        alert("검색 중 오류가 발생했습니다.");
      }
    }
  };

  // 입력값이 변경될 때마다 디바운싱 처리
  const handleChange = (e) => {
    setQuery(e.target.value);
    fetchSearchResults(e.target.value);
  };

  // 검색 결과를 클릭했을 때 페이지 이동
  const handleSelectResult = (company) => {
    console.log("선택한 회사:", company);
    navigate(""); // 선택한 종목 상세 페이지로 이동
    setResults([]);
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
          {results.map((company) => {
            return (
              <SearchResultItem
                key={company._id}
                onClick={() => handleSelectResult(company)}
              >
                {company.corp_name}
              </SearchResultItem>
            );
          })}
        </SearchResults>
      )}
    </Div>
  );
}

export default SearchBar;
