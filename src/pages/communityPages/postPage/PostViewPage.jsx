import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import BottomNavBar from "../../../components/common/bottomNavBars/BottomNavBar";
import PostBox from "../../../components/communityPage/postViewPage/PostBox";
import WriteComment from "../../../components/communityPage/postViewPage/WriteComment";
import CommentList from "../../../components/communityPage/postViewPage/CommentList";
import BackButton from "../../../components/common/BackButton";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto; // 세로 스크롤 추가

  padding-bottom: 65px; // 여백 추가 (댓글이나 내용이 잘리는 것을 방지)
`;
function PostViewPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/community/${postId}`
        );
        console.log(response.data);
        setPost(response.data);
      } catch (err) {
        setError("게시글을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>게시글이 존재하지 않습니다.</p>;

  return (
    <>
      <BottomNavBar />
      <Div>
        <div>
          <BackButton width={29} height={29} link={"/communityposts"} />
        </div>
        <PostBox post={post} />
        <WriteComment postId={postId} setPost={setPost} />
        <CommentList comments={post.comments} />
      </Div>
    </>
  );
}

export default PostViewPage;
