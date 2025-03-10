import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "./PostList";
import data from "../data.json";
import WriteBtn from "../../../components/communityPage/postListPage/WriteBtn";
import BottomNavBar from "../../../components/common/bottomNavBars/BottomNavBar";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
`;

const TimeLine = styled.p`
  margin: 17px 10px;
  font-size: 30px;
  font-weight: 750;
  padding-left: 15px;
`;

function PostListPage({ display }) {
  const navigate = useNavigate();

  return (
    <>
      <BottomNavBar display={display} />
      <Div>
        <TimeLine>타임라인</TimeLine>
        <Box>
          <PostList
            posts={data}
            onClickItem={(item) => {
              navigate(`/communityposts/post/${item.id}`);
            }}
          />
        </Box>
        <WriteBtn
          onClickBtn={() => {
            navigate("/communitywrite");
          }}
        />
      </Div>
    </>
  );
}

export default PostListPage;
