import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  overflow: auto;
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

const TitleText = styled.h2`
  font-size: 24px;
  text-align: left;
  margin-right: 10px;
`;

const TitleInput = styled.input`
  border: none;
  font-size: 20px;
  color: #000;
  width: 100%;
  padding: 5px;
`;

//InputField와 Percent 표시를 감싸는 컨데이너
const TotalCotainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  margin-left: 60px;
`;
const TotalLabel = styled.p`
  font-size: 22px;
  width: 150px;
  text-align: left;
  margin: 0; //불필요한 여백 제거
  border-bottom: solid 2px #b2c4df;
`;

const TotalInput = styled.p`
  border: none;
  font-size: 30px;
  text-align: center;
  padding-bottom: 5px;
  width: 80px;
`;

const PercentInput = styled.input`
  width: 13%;
  padding: 0 10px;
  /* margin-right: 80px; */
  border: none;
  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
  /* margin-bottom: 20px; */
  cursor: ${(props) => (props.readOnly ? "not-allowed" : "text")};
  margin-left: 30px;
`;

//InputField와 Percent 표시를 감싸는 컨데이너
const InputWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%
  padding:5px 20px;
`;

const InputField2 = styled.input`
  width: 100%;
  padding: 1 10px;
  border: none;
  margin-left: 57px;
  margin-right: 25px;
  border-bottom: solid 2px #b2c4df;
  font-size: 20px;
  color: #000;
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

function PortMakeModal({ isOpen, onClose }) {
  //if (!isOpen) return null;

  const [name, setName] = useState("");
  const [totalPercent, setTotalPercent] = useState("0");
  const [inputFields, setInputFields] = useState([
    { ticker: "", percent: "" }, // 초기 입력 필드 두개
    { ticker: "", percent: "" },
  ]);
  const [isMaxPercent, setIsMaxPercent] = useState(false);

  const navigate = useNavigate();

  //종목 정보 업데이트
  const handleInputChange = (index, field, value) => {
    const newInputFields = [...inputFields];

    if (field === "percent") {
      const numericValue = value === "" ? "" : Math.max(0, Number(value)); // percent가 빈 문자열일때 " "로 NaN 방지 및 숫자로 변환
      newInputFields[index][field] = numericValue;
    } else {
      newInputFields[index][field] = value;
    }
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
  //Total 텍스트 고정
  const TotalRow = ({ totalPercent }) => {
    return (
      <TotalContainer>
        <TotalLabel>Total</TotalLabel>
        <TotalInput>{totalPercent}%</TotalInput>
      </TotalContainer>
    );
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

  // isFormValid 변수 추가
  const isFormValid = name.trim() !== "" && totalPercent <= 100;
  console.log("isFormValid:", isFormValid);

  //제작하기 버튼 클릭 시 포트폴리오 데이터를 localStorage에 저장 후 Portfoliopage로 이동
  const handleCreatePortfolio = () => {
    const portfolioData = {
      name,
      tickers: inputFields,
    };

    // 데이터를 localStorage에 저장
    localStorage.setItem("portfolio", JSON.stringify(portfolioData));

    // Portfoliopage로 이동
    navigate("/portmn");
  };

  return (
    <>
      <Backdrop onClick={() => navigate("/portmn")}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <>
            <Title>
              <TitleText></TitleText>
              <TitleInput
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => {
                  console.log("입력:", e.target.value);
                  setName(e.target.value);
                }}
              />
            </Title>
            <TotalCotainer>
              <TotalLabel>Total</TotalLabel>
              <PercentInput value={`${totalPercent}%`} readOnly={true} />
            </TotalCotainer>

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
            {/* 제작하기 버튼 */}
            <PortMakeBtn
              disabled={!isFormValid}
              onClick={handleCreatePortfolio}
            >
              제작하기
            </PortMakeBtn>
          </>
        </Modal>
      </Backdrop>
      <BottomNavBar />
    </>
  );
}

export default PortMakeModal;
