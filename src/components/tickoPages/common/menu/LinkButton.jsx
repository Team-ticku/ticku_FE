import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  padding: ${(props) => props.padding || "0"};
  text-decoration: none;
  text-align: center;
  color: black;
  border-radius: 20px;
  border: 1px solid #b2c4df;
  background-color: rgba(178, 196, 223, 0.2);
  font-size: 15px;
  /* 이미지 메뉴를 위한 속성 */
  display: flex;
  flex-direction: column;
`;

export default function LinkButton({ link, title, padding, children }) {
  return (
    <StyledLink to={link} padding={padding}>
      {children}
      {title}
    </StyledLink>
  );
}
