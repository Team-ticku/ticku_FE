import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PortMakeBtn from "./PortMakeBtn";
import BottomNavBar from "../common/bottomNavBars/BottomNavBar";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(5px) brightness(0.7);
`;

//모달이 나타나는 애니메이션 정의
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

//모달 컨데이너 정의
const Modal = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  width: 100%;
  height: 500px;
  border-radius: 50px 50px 0 0;
  text-align: center;
  z-index: 2;
  animation: ${slideUp} 0.3s ease-out forwards;
`;

//이름 입력창

const Title = styled.h2`
  width: 60%;
  font-size: 24px;
  margin-top: 45px;
  margin-bottom: 16px;
  text-align: left;
  margin-left: 65px;
  padding: 0 7px;
  border-bottom: solid 2px #b2c4df;
  color: #c9c9c9;
`;

//InputField와 Percent 표시를 감싸는 컨데이너
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 8px;
`;
const InputField1 = styled.input`
  width: 100%;
  padding: 0 10px;
  border: none;
  margin-left: 65px;
  margin-right: 20px;
  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const PercentInputContainer = styled.div`
  position: relative;
  width: 50%;
  margin-right: 60px;
  margin-top: 10px;
  margin-left: 20px;
`;

const PercentInput = styled.input`
  //min-width: 20px;
  width: 60%;
  padding: 0 8px;
  margin-right: 70px;
  border: none;
  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: ${(props) => (props.readOnly ? "not-allowed" : "text")};
`;

//InputField와 Percent 표시를 감싸는 컨데이너

const InputField2 = styled.input`
  width: 100%;
  padding: 1 10px;
  border: none;
  margin-left: 57px;
  margin-right: 25px;
  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
  color: #c9c9c9;
  //margin-top: 10px;
  //margin-bottom: 20px;
`;
const PercentInputContainer2 = styled.div`
  position: relative;
  width: 100%;
  margin-left: 3px;
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
  align-items: center;
  gap: 10px;
`;

const PercentInput2 = styled.input`
  width: 45px;
  padding: 0 13px;
  //margin-right: 30px;
  border: none;

  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
`;
const AddButtonImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 10px auto;
  display: flex;
  margin-top: 15px;
  margin-bottom: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const DelButtonImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

// const SubmitButton = styled.button`
//  background-color: #4a90e2;
//  color: white;
//  border: none;
//  padding: 15px 30px;
//  font-size: 16px;
//  cursor: pointer;
//  transition: background-color 0.3s;

//  &:hover {
//    background-color: #3a7bc8;
// }
//`;

function PortMakeModal({ isOpen, onClose }) {
  //if (!isOpen) return null;

  const [name, setName] = useState("");
  const [totalPercent, setTotalPercent] = useState("0");
  const [inputFields, setInputFields] = useState([
    { ticker: "", percent: "" }, // 초기 입력 필드 두개
    { ticker: "", percent: "" },
  ]);
  const [isMaxPercent, setIsMaxPercent] = useState(false);

  const handleInputChange = (index, field, value) => {
    if (field === "percent") {
      // 숫자가 아니거나 음수인 경우 무시
      if (isNaN(value) || value < 0) return;
    }

    const newInputFields = [...inputFields];
    newInputFields[index][field] = value;
    setInputFields(newInputFields);
  };

  //삭제 함수
  const handleDelField = (indexToRemove) => {
    //최소 하나의 입력 필드는 유지
    if (inputFields.length > 1) {
      setInputFields((prevFields) =>
        prevFields.filter((_, index) => index !== indexToRemove)
      );
    } else {
      setInputFields([{ ticker: "", percent: "" }]);
    }
  };

  //총 퍼센트 계산을 위한 useEffect
  useEffect(() => {
    const sum = inputFields.reduce((total, field) => {
      const percentValue = parseFloat(field.percent) || 0;
      return total + percentValue;
    }, 0);
    //합계를 상태에 저장
    setTotalPercent(Math.round(sum));
  }, [inputFields]);

  return (
    <>
      <Backdrop onClick={onClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Title>이름을 입력하세요</Title>
          <InputWrapper>
            <InputField1
              type="text"
              placeholder="Total"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <PercentInputContainer>
              <PercentInput
                type="text"
                value={`${totalPercent}%`}
                readOnly={true}
              />
            </PercentInputContainer>
          </InputWrapper>

          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              <InputField2
                type="text"
                placeholder={`Ticker ${index + 1}`}
                value={field.ticker}
                onChange={(e) =>
                  handleInputChange(index, "ticker", e.target.value)
                }
              />
              <PercentInputContainer2>
                <PercentInput2
                  type="number"
                  placeholder="0%"
                  value={field.percent}
                  onChange={(e) =>
                    handleInputChange(index, "percent", e.target.value)
                  }
                  min="0"
                  max="100"
                  readOnly={isMaxPercent && field.percent === ""}
                />
                {/* 마이너스 버튼 추가 */}
                <DelButtonImage
                  src="../../public/images/minus.png"
                  alt="Del field"
                  onClick={() => handleDelField(index)}
                />
              </PercentInputContainer2>
            </InputWrapper>
          ))}
          <AddButtonImage
            src="../../public/images/plus.png"
            alt="Add field"
            onClick={() =>
              setInputFields([...inputFields, { ticker: "", percent: "" }])
            }
          />
          <PortMakeBtn></PortMakeBtn>
          {/* <SubmitButton onClick={handleSubmit}>확인</SubmitButton> */}
        </Modal>
      </Backdrop>
      <BottomNavBar />
    </>
  );
}

export default PortMakeModal;
