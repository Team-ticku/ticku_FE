import React from "react";
import styled from "styled-components";
import TopBar from "../../../components/communityPage/postWritePage/TopBar";
import BottomNavBar from "../../../components/common/bottomNavBars/BottomNavBar";
import SelectTag from "../../../components/communityPage/postWritePage/SelectTag";
import TitleInput from "../../../components/communityPage/postWritePage/TitleInput";
import ContentInput from "../../../components/communityPage/postWritePage/ContentInput";
import BottomBar from "../../../components/communityPage/postWritePage/BottomBar";

const Wrap = styled.div`
  width: 390px;
`;

function PostWritePage({ display }) {
  return (
    <Wrap>
      <BottomNavBar display={display} />
      <TopBar />
      <SelectTag />
      <TitleInput />
      <ContentInput />
      <BottomBar />
    </Wrap>
  );
}

export default PostWritePage;
