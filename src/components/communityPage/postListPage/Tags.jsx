import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 16px;
  margin-bottom: 4px;
  display: flex;
  padding: 0 26px;
  height: 33px;
`;

const Tag = styled.div`
  display: inline-flex;
  border-radius: 7px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => getTagColor(props.tag)};
`;

const TagText = styled.p`
  padding: 3px 10px;
  font-size: 18px;
  font-weight: 500;
  color: white;
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

function Tags(props) {
  return (
    <Div>
      <Tag tag={props.tag}>
        <TagText>{props.tag}</TagText>
      </Tag>
    </Div>
  );
}

Tags.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tags;
