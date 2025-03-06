import styled from "styled-components";
import ButtonMenu from "../../components/tickoPages/tickoPage/ButtonMenu";
import CharIntroduce from "../../components/tickoPages/tickoPage/CharIntroduce";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";

const Wrap = styled.div`
  padding-top: 25px;
  width: 390px;
`;

export default function TickoPage({ display }) {
  return (
    <Wrap>
      <BottomNavBar display={display} />
      <CharIntroduce></CharIntroduce>
      <ButtonMenu></ButtonMenu>
    </Wrap>
  );
}
