import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PortDiv = styled.div`
  width: 300px;
  height: 250px;
  background-color: rgba(178, 196, 223, 0.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  position: relative;
`;

const AddButton = styled.img`
  width: 50px;
  height: 50px;
`;

const PortBox = ({ link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portmn/" + link);
  };

  return (
    <PortDiv onClick={handleClick}>
      <AddButton src="../public/images/portadd.png" />
    </PortDiv>
  );
};

export default PortBox;
