import React from "react";
import { Route, Routes } from "react-router-dom"; // Routes를 추가 import
import PostViewPage from "../../pages/communityPages/postPage/PostViewPage";
import PostWritePage from "../../pages/communityPages/postWritePage/PostWritePage";
import EditPostPage from "../../pages/communityPages/EditPostPage";

export default function PostViewRoute() {
  return (
    <Routes>
      <Route path="/communityposts/post/:postId" element={<PostViewPage />} />
      <Route path="/communitywrite" element={<PostWritePage />} />
      <Route path="/editpost/:postId" element={<EditPostPage />} />
    </Routes>
  );
}
