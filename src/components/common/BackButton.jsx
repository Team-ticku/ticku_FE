import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin-left: 10px;
`;

const Img = styled.img`
  ${({ height }) => height && `height: ${height}px;`}
  ${({ width }) => width && `width: ${width}px;`}
`;

function BackButton({
  width = 24,
  height = 24,
  src = "/images/arrow_back.png",
  link,
}) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(link)}>
      <Img src={src} alt="뒤로가기" width={width} height={height} link={link} />
    </Button>
  );
}

export default BackButton;
