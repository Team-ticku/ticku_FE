import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #b2c4df;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  /* object-position: 0px 10px; */
  display: block;
`;

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Btn onClick={scrollToTop}>
        <Image src="../public/images/TopScrollBtn2.png"></Image>
      </Btn>
    </>
  );
}

export default ScrollToTopButton;
