import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const SearchRankText = styled.div`
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 8px;
  margin-left: 1px;
`;

const SearchBar = styled.div`
  width: 280px;
  height: 50px;
  border: 1px solid #b2c4df;
  border-width: 1.5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const RankNumber = styled.p`
  font-size: 21px;
  font-weight: 650;
`;

function LiveSearchRank(props) {
  return (
    <Div>
      <Box>
        <SearchRankText>실시간 검색어 순위</SearchRankText>
        <SearchBar>
          <RankNumber>1.</RankNumber>
        </SearchBar>
      </Box>
    </Div>
  );
}

export default LiveSearchRank;
