// src/components/common/SearchBar.jsx
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate import

const Div = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

function SearchBar({ onSearch }) {
  const [ticker, setTicker] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(ticker);
    }
  };

  const handleBoxClick = () => {
    // inputRef.current.focus(); // 포커스 이동 + 페이지 이동
    navigate(`/Information/List?query=${ticker}`); // 페이지 이동
  };

  const handleChange = (e) => {
    setTicker(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Div>
      <Box onClick={handleBoxClick}>
        <SearchIcon src="/images/search.png" alt="Search Icon" />{" "}
        {/* public 제거 */}
        <StyledTextInput
          ref={inputRef}
          placeholder="종목 검색"
          value={ticker}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Div>
  );
}

export default SearchBar;
