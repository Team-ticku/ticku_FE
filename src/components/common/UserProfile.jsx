import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import userData from "../../pages/communityPages/user.json"; // 커뮤니티 페이지 테스트를 위한 가짜 데이터

const Div = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  ${(props) => props.height && `height: ${props.height}px;`}
  ${(props) => props.width && `width: ${props.width}px;`}
  border-radius:20px;
  object-fit: cover;
  margin-right: 10px;
`;

const UserName = styled.p`
  ${(props) => props.fontsize && `font-size: ${props.fontsize}px;`}
  ${(props) => props.padding && `padding-bottom: ${props.padding}px;`}
`;

function UserProfile({ userId, height, width, fontsize, padding }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const user = userData.find((user) => user.userId === userId);
    setUserInfo(user);
  }, [userId]);

  const userImage =
    userInfo && userInfo.image
      ? userInfo.image
      : "/public/images/profile_picture.png";
  const userName = userInfo && userInfo.name ? userInfo.name : "익명";

  return (
    <Div>
      <ProfilePicture
        src={userImage}
        alt="Profile Picture"
        height={height}
        width={width}
      />
      <UserName fontsize={fontsize} padding={padding}>
        {userName}
      </UserName>
    </Div>
  );
}

UserProfile.propTypes = {
  userId: PropTypes.number.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  padding: PropTypes.number,
  fontsize: PropTypes.number,
};

export default UserProfile;
