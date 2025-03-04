import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  ${(props) => props.padding && `padding: ${props.padding};`};
  text-decoration: none;
  color: black;
  /* padding: 6px 7px; */
  border-radius: 20px;
  border: 1px solid #b2c4df;
  background-color: rgba(178, 196, 223, 0.2);
  font-size: 15px;
`;

export default function LinkButton({ link, title, padding }) {
  return (
    <StyledLink to={link} padding={padding}>
      {title}
    </StyledLink>
  );
}
