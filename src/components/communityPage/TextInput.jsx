import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/*

TextInput.jsx

텍스트를 입력할 수 있는 textarea
- 높이, 배경색, placeholder를 동적으로 변경 가능.
- 높이: `height` prop을 통해 설정, 기본값: `auto`
- 배경색: `background` prop을 통해 설정, 기본값: `white`
- placeholder: `placeholder` prop을 통해 설정
- `value`와 `onChange` props는 텍스트 영역의 입력값을 관리하기 위해 사용.

*/

const StyledTextarea = styled.textarea`
  height: ${(props) => props.$height || "auto"}px;
  background-color: ${(props) => props.$background || "white"};
  border-radius: 10px;
  font-size: 18px;
  height: 20px;
  padding: 10px;
  resize: none;
  border: none;
  margin-left: 25px;
  margin-right: 10px;
  width: 260px;
`;

function TextInput({ height, background, placeholder, value, onChange }) {
  return (
    <StyledTextarea
      $height={height}
      $background={background}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

TextInput.propTypes = {
  height: PropTypes.number,
  placeholder: PropTypes.string,
  background: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
