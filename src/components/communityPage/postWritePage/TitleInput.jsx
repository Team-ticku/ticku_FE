import React, { useState, useRef } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 55px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const StyledTextarea = styled.textarea`
  margin: 3px 20px;
  outline: none;
  border: none;
  width: 330px;
  height: 36px;
  font-size: 22px;
  color: #1b1a1a;
  font-weight: 500;
  background: transparent;
  caret-color: #b2c4df;
  border-bottom: 2px solid #a9a9a9b6;
  resize: none;
  overflow: hidden;
  white-space: nowrap;

  &:focus {
    background: transparent;
    border-bottom: 2px solid #b2c4df;
  }

  &::placeholder {
    color: #a9a9a9b6;
  }
`;

function TitleInput() {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Div
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <StyledTextarea
        ref={inputRef}
        placeholder="제목을 입력하세요."
        maxLength={50}
        onChange={handleChange}
        value={title}
      />
    </Div>
  );
}

export default TitleInput;
