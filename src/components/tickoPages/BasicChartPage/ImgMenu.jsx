import styled from "styled-components";
import LinkButton from "../common/menu/LinkButton";

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
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid #b2c4df;
  border-radius: 15px;
  padding: 25px 15px;
  gap: 10px 5px;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  src: ${(props) => props.src || null};
`;

export default function ImgMenu({ list }) {
  return (
    <Wrap>
      <Dummy></Dummy>
      <MenuWrap>
        <LinkButton
          link={"/ticko/chart/1"}
          title={"캔들스틱 표기 기간"}
          padding={"7px 49px"}
        ></LinkButton>
        {list.map((menu, idx) => {
          return (
            <>
              <LinkButton
                key={idx}
                link={menu.link}
                title={menu.title}
                padding={menu.padding}
              >
                <Img src={menu.src}></Img>
              </LinkButton>
            </>
          );
        })}
      </MenuWrap>
    </Wrap>
  );
}
