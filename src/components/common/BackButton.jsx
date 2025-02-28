import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin-left: 10px;
`;
const Img = styled.img`
  ${(props) => props.height && `height: ${props.height}px;`};
  ${(props) => props.width && `width: ${props.width}px;`};
`;

function BackButton({ width, height, link }) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate(link);
        }}
      >
        <Img
          src="/images/arrow_back.png"
          alt="뒤로가기"
          width={width}
          height={height}
        ></Img>
      </Button>
    </>
  );
}

export default BackButton;
