import React, { useState, useRef } from "react";
import styled from "styled-components";

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

function SearchBar(props) {
  const [ticker, setTicker] = useState("");
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(`검색한 종목: ${ticker}`);
    }
  };

  const handleBoxClick = () => {
    inputRef.current.focus();
  };
  return (
    <Div>
      <Box onClick={handleBoxClick}>
        <SearchIcon src="/public/images/search.png" alt="Search Icon" />
        <StyledTextInput
          ref={inputRef}
          placeholder="종목 검색"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Div>
  );
}

export default SearchBar;
