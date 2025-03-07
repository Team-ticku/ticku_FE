import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${(props) => props.marginLeft || "160px"};
  box-sizing: border-box;
  width: 100px;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Picture = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`;

const CountText = styled.p`
  margin-left: 4px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

function Stats(props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (event) => {
    event.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Div marginLeft={props.marginLeft}>
      <Container>
        <Picture
          src={
            isLiked
              ? "../../../public/images/heart.png"
              : "../../../public/images/heartline.png"
          }
          onClick={handleLikeClick}
        />
        <CountText>{props.likesCount}</CountText>
      </Container>
      <Container>
        <Picture src="../../../public/images/comment.png" />
        <CountText>{props.commentsCount}</CountText>
      </Container>
    </Div>
  );
}

Stats.propTypes = {
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  marginLeft: PropTypes.string,
};

export default Stats;
