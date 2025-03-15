import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// 스타일링 부분
const Div = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;
  display: flex;
  padding: 0 26px;
  height: ${(props) => props.height || "33px"}; /* height 동적 변경 */
`;

const Tag = styled.div`
  display: inline-flex;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || "33px"}; /* height 동적 변경 */
  width: ${(props) => props.width || "auto"}; /* width 동적 변경 */
  background-color: ${(props) => getTagColor(props.tag)};
  cursor: pointer; /* 클릭 가능하도록 */
  margin-right: 10px; /* 태그들 간의 간격 */
  padding: 0 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      getTagHoverColor(props.tag)}; /* 호버 시 색상 변화 */
  }
`;

const TagText = styled.p`
  font-size: ${(props) => props.fontSize || "18px"}; /* font-size 동적 변경 */
  font-weight: 500;
  color: white;
  padding: 3px 10px;
`;

function getTagColor(tag) {
  switch (tag) {
    case "일상":
      return "#FDA9AB";
    case "질문":
      return "#DAADDA";
    case "정보/분석":
      return "#97D09D";
    case "포트폴리오":
      return "#FFD885";
    case "종목 추천":
      return "#B2DADF";
    default:
      return "#607D8B";
  }
}

function getTagHoverColor(tag) {
  switch (tag) {
    case "일상":
      return "#F79B9B";
    case "질문":
      return "#C59EC1";
    case "정보/분석":
      return "#7DBA7D";
    case "포트폴리오":
      return "#FFB94D";
    case "종목 추천":
      return "#9DC8D7";
    default:
      return "#A0B0B5";
  }
}

// 태그 컴포넌트
function Tags({ tag, onClick, height, width, fontSize }) {
  return (
    <Div height={height}>
      <Tag tag={tag} onClick={() => onClick(tag)} height={height} width={width}>
        <TagText fontSize={fontSize}>{tag}</TagText>
      </Tag>
    </Div>
  );
}

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // 부모에서 전달한 클릭 이벤트
  height: PropTypes.string, // height 속성
  width: PropTypes.string, // width 속성
  fontSize: PropTypes.string, // font-size 속성
};

Tags.defaultProps = {
  height: "33px", // 기본 height
  width: "auto", // 기본 width
  fontSize: "18px", // 기본 font-size
};

export default Tags;
