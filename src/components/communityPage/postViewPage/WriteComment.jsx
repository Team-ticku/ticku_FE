import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";

/*

WriteComment.jsx

- 댓글을 입력하는 텍스트 입력란과 댓글 등록 버튼을 제공하는 컴포넌트
- 사용자가 입력한 댓글을 상태(`comment`)로 관리
- 댓글을 입력하고 "등록" 버튼을 클릭하면 해당 댓글을 콘솔에 출력하고, 입력란을 비움

*/

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

function WriteComment() {
  const [comment, setComment] = useState("");

  return (
    <Div>
      <TextInput
        height={40}
        value={comment}
        placeholder="댓글을 입력하세요."
        background="#EEEEEE"
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />
      <Button
        height={40}
        title="등록"
        background="#B2C4DF"
        onClick={() => {
          console.log(comment);
          setComment("");
        }}
      />
    </Div>
  );
}

export default WriteComment;
