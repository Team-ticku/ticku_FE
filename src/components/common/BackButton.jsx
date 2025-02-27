import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  padding: 0;
  border: none;
  background: none;
  margin-left: 10px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;

function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        <Img src="/images/arrow_back.png" alt="뒤로가기"></Img>
      </Button>
    </>
  );
}

export default BackButton;
