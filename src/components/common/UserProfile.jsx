import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  display: inline-flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  ${(props) => props.height && `height: ${props.height}px;`}
  ${(props) => props.width && `width: ${props.width}px;`}
  object-fit: cover;
  margin-right: 10px;
`;

const UserName = styled.p`
  ${(props) => props.fontsize && `font-size: ${props.fontsize}px;`}
  padding-top: 3px;
`;

function UserProfile({ name, height, width, fontsize }) {
  return (
    <Div>
      <ProfilePicture
        src="/public/images/profile_picture.png"
        alt="Profile Picture"
        height={height}
        width={width}
      />
      <UserName fontsize={fontsize}>{name}</UserName>
    </Div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  fontsize: PropTypes.number,
};

export default UserProfile;
