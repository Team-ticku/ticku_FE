import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useRef, useState, useEffect } from "react"; // useRef, useState, useEffect import
import NavBtn from "./NavBtn.jsx";

import chartIcon from "../../../public/images/information/chartIcon.png";
import financeIcon from "../../../public/images/information/financeIcon.png";
import volumeIcon from "../../../public/images/information/volumeIcon.png";
import newsIcon from "../../../public/images/information/newsIcon.png";
import dividendIcon from "../../../public/images/information/dividendIcon.png";
import resultIcon from "../../../public/images/information/resultIcon.png";

const NAVDIV = styled.div`
  display: flex;
  justify-content: center;
  position: relative; // ::after 가상 요소를 위해 필요
  &::after {
    // ::after 가상 요소 (하단 구분선)
    content: "";
    position: absolute;
    bottom: 0;
    left: 40px;
    right: 40px;
    height: 2px;
    background-color: #b2c4df;
  }
`;

const NavBarContainer = styled.div`
  // 컨테이너 추가
  width: 80%; // NavBar의 너비 (4개 항목 + 스크롤 여유 공간)
  margin: 0; // 가로 중앙 정렬
  overflow-x: auto; // 가로 스크롤 활성화
  overflow-y: hidden; //세로 스크롤은 숨기기

  white-space: nowrap; // NavBtn들이 한 줄에 표시되도록 함
  -webkit-overflow-scrolling: touch; // iOS에서 부드러운 스크롤링
  user-select: none;
  touch-action: pan-y;
  /* padding:  */
`;

const NavBar = styled.div`
  display: flex;
  // justify-content: center; // 제거 (flex-start를 사용하거나, 아예 없애서 컨테이너의 nowrap에 의해 한 줄로 배치되도록)
  justify-content: flex-start; // 왼쪽 정렬 (스크롤 가능하도록)
  padding: 15px 0px; // 양쪽에 약간의 여백 (선택 사항)
  width: fit-content; // NavBar의 내용물에 의해 너비가 결정되도록
`;

const navButtons = [
  { icon: chartIcon, text: "차트", bgColor: "#F5D3F3", link: "/chart" },
  {
    icon: financeIcon,
    text: "기업 재무",
    bgColor: "#D9DFB2",
    link: "/finance",
  },
  { icon: volumeIcon, text: "거래량", bgColor: "#B2DFBF", link: "/volume" },
  { icon: newsIcon, text: "뉴스", bgColor: "#BDB2DF", link: "/news" },
  { icon: dividendIcon, text: "배당", bgColor: "#B2D1DF", link: "/dividend" },
  { icon: resultIcon, text: "실적", bgColor: "#FDC7AC", link: "/result" },
];

function Navigation() {
  const navigate = useNavigate();
  const containerRef = useRef(null); // NavBarContainer에 대한 ref
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
      container.style.cursor = "grabbing"; // 커서 변경
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault(); // 기본 동작 방지 (텍스트 선택 등)
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5; // 스크롤 속도 조절 (원하는 대로 변경)
      container.scrollLeft = scrollLeft - walk;
    };

    // 마우스 이벤트 리스너 등록
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    // 터치 이벤트 리스너 (모바일/태블릿)
    container.addEventListener("touchstart", (e) =>
      handleMouseDown(e.touches[0])
    );
    container.addEventListener("touchend", handleMouseUp);
    container.addEventListener("touchcancel", handleMouseUp);
    container.addEventListener("touchmove", (e) =>
      handleMouseMove(e.touches[0])
    );

    // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);

      container.removeEventListener("touchstart", (e) =>
        handleMouseDown(e.touches[0])
      );
      container.removeEventListener("touchend", handleMouseUp);
      container.removeEventListener("touchcancel", handleMouseUp);
      container.removeEventListener("touchmove", (e) =>
        handleMouseMove(e.touches[0])
      );
    };
  }, [isDragging, startX, scrollLeft]); // 의존성 배열 (필수)

  return (
    <NAVDIV>
      <NavBarContainer ref={containerRef} style={{ cursor: "grab" }}>
        <NavBar>
          {navButtons.map((button, index) => (
            <NavBtn
              key={index}
              icon={button.icon}
              text={button.text}
              bgColor={button.bgColor}
              onClick={() => navigate(button.link)}
              tabIndex={0}
            />
          ))}
        </NavBar>
      </NavBarContainer>
    </NAVDIV>
  );
}

export default Navigation;
