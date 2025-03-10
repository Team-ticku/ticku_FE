import React from "react";
import { Route, Routes } from "react-router-dom"; // Routes를 추가 import
import PostViewPage from "../../pages/communityPages/postPage/PostViewPage";
import PostWritePage from "../../pages/communityPages/postWritePage/PostWritePage";

export default function PostViewRoute() {
  return (
    <Routes>
      <Route path="/communityposts/post/:postId" element={<PostViewPage />} />
      <Route path="/communitywrite" element={<PostWritePage />} />
    </Routes>
  );
}
