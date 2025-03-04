import ButtonMenu from "../../components/tickoPages/tickoPage/ButtonMenu";
import CharIntroduce from "../../components/tickoPages/tickoPage/CharIntroduce";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";

export default function tickoPage() {
  return (
    <>
      <BottomNavBar />
      <CharIntroduce></CharIntroduce>
      <ButtonMenu></ButtonMenu>
    </>
  );
}
