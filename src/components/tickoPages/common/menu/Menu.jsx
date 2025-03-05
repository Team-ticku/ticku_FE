import styled from "styled-components";
import LinkButton from "./LinkButton";

const Wrap = styled.div`
  display: flex;
  gap: 5px;
`;
const Dummy = styled.div`
  display: hidden;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  flex-shrink: 0;
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid #b2c4df;
  border-radius: 15px;
  padding: 25px 15px;
  gap: 10px 5px;
`;

export default function Menu({ list, flexDirection }) {
  return (
    <Wrap>
      <Dummy></Dummy>
      <MenuWrap flexDirection={flexDirection}>
        {list.map((menu, idx) => {
          return (
            <LinkButton
              key={idx}
              link={menu.link}
              title={menu.title}
              padding={menu.padding}
            ></LinkButton>
          );
        })}
      </MenuWrap>
    </Wrap>
  );
}
