// ResultTable.jsx
import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 380px;
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: auto;
  width: 350px;
  border-collapse: separate; /* 중요 */
  border-spacing: 0; /* 중요 */
  table-layout: fixed;
  border-radius: 10px; /* 둥근 모서리 */
  overflow: hidden; /* 중요: 바깥쪽으로 나가는 border를 감춤 */
  border: 2px solid #b2c4df; /* 전체 테두리 */
  font-size: 12px;
`;

const Th = styled.th`
  background-color: rgba(178, 196, 223, 0.22);
  padding: 8px 10px;
  border: 1px solid #b2c4df;
  /* border-bottom: 0; */
  text-align: center;
  font-weight: bold;
  color: #333;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 8px 12px;
  text-align: center;
  border: 1px solid #b2c4df;
`;

const NoData = styled.p`
  text-align: center;
  padding: 20px;
  color: #999;
`;

function ResultTable({ data }) {
  // prop 이름 변경
  if (!Array.isArray(data) || data.length === 0) {
    return <NoData>배당 데이터가 없습니다.</NoData>; // 메시지 수정
  }

  const categories = data.map((item) => item.category); // category 목록 추출
  const years = Object.keys(data[0])
    .filter((key) => key !== "category")
    .sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <TableContainer>
      <Table>
        <colgroup>
          {/* 구분 컬럼 */}
          <col style={{ width: "25%" }} />
          {/* 카테고리 수만큼 col 생성 */}
          {categories.map((_, index) => (
            <col key={index} style={{ width: `${75 / categories.length}%` }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {/* 카테고리 헤더 렌더링 (매출액, 영업이익, 순이익) */}
            <Th>구분</Th>
            {categories.map((category, index) => (
              <Th key={index}>{category}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* 연도를 순회 */}
          {years.map((year, index) => (
            <tr key={index}>
              <Td>{year}</Td>
              {/* 각 카테고리에 해당하는 연도의 값 렌더링 */}
              {data.map((item, itemIndex) => (
                <Td key={itemIndex}>{item[year]}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default ResultTable;
