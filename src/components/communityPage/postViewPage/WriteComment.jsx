import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../TextInput";
import Button from "../Button";
import axios from "axios";

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

function WriteComment({ postId, setPost }) {
  const [comment, setComment] = useState("");

  // 로컬스토리지에서 사용자 ID 가져오기
  const userId = localStorage.getItem("userId");

  const handleCommentSubmit = async () => {
    // userId가 없으면 로그인되지 않은 상태
    if (!userId) {
      alert("로그인 후 댓글을 작성할 수 있습니다.");
      return;
    }

    // 댓글이 비어있는지 확인
    if (!comment.trim()) {
      alert("댓글을 입력하세요.");
      return;
    }

    try {
      // 댓글을 서버로 전송
      const response = await axios.post(
        `http://localhost:5000/community/${postId}/comments`,
        {
          userId: userId,
          content: comment,
        }
      );

      // 댓글 추가 후 최신 게시글 데이터로 갱신
      setPost(response.data);
      setComment("");
    } catch (err) {
      console.error("댓글 추가 오류:", err);
    }
  };

  return (
    <Div>
      <TextInput
        height={40}
        value={comment}
        placeholder="댓글을 입력하세요."
        background="#EEEEEE"
        onChange={(event) => setComment(event.target.value)}
      />
      <Button
        height={40}
        title="등록"
        background="#B2C4DF"
        onClick={handleCommentSubmit}
      />
    </Div>
  );
}

export default WriteComment;
