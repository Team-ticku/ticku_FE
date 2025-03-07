import React from "react";
import { Route, Routes } from "react-router-dom"; // Routes를 추가 import
import PostViewPage from "../../pages/communityPages/postPage/PostViewPage";

export default function PostViewRoute() {
  return (
    <Routes>
      <Route path="/communityposts/post/:postId" element={<PostViewPage />} />
    </Routes>
  );
}
