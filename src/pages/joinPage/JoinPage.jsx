import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 70%;
  margin: 7vh auto 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ticko = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #d9d9d9;
`;

const IdInput = styled.input`
  width: 95%;
  height: 46px;
  margin-top: 50px;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #b2c4df;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const DuplicateID = styled.p`
  color: #fc6868;
  font-size: 12px;
  margin: 0;
  margin-top: 10px;
  width: 95%;
  text-align: left;
  display: ${(props) => (props.isIdDuplicate ? "block" : "none")};
`;

const PassWordInput = styled.input`
  width: 95%;
  height: 46px;
  margin-top: 15px;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #b2c4df;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const NameInput = styled.input`
  width: 95%;
  height: 46px;
  margin-top: 15px;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #b2c4df;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const JoinButton = styled.button`
  position: fixed;
  width: 100%;
  height: 65px;
  border: none;
  background-color: #b2c4df;
  color: #ffffff;
  margin-top: 40px;
  font-size: 16px;
  bottom: 0;
`;

function JoinPage() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isIdDuplicate, setIsIdDuplicate] = useState(false); // 중복 아이디 상태

  const navigate = useNavigate();

  const handleJoin = async () => {
    console.log("회원가입");

    // 하나라도 비어있으면 return
    if (!uid || !password || !name) {
      return;
    }

    try {
      // 아이디 중복 검사
      const duplicateResponse = await fetch("http://localhost:5000/check-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });

      const duplicateData = await duplicateResponse.json();

      if (duplicateData.isIdDuplicate) {
        setIsIdDuplicate(true);
        return;
      }

      // 회원가입 진행
      const response = await fetch("http://localhost:5000/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, password, name }),
      });

      const data = await response.json();

      if (response.status === 201) {
        navigate("/login");
      } else {
        console.log("회원가입 실패 : " + data.message);
      }
    } catch (err) {
      console.error(err);
      console.log("회원가입 실패");
    }
  };

  return (
    <>
      <Div>
        <Container>
          <Ticko></Ticko>

          <IdInput
            type="text"
            placeholder="아이디를 입력하세요"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          />
          <DuplicateID isIdDuplicate={isIdDuplicate}>
            중복된 아이디입니다
          </DuplicateID>

          <PassWordInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <NameInput
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Container>
        <JoinButton onClick={handleJoin}>가입하기</JoinButton>
      </Div>
    </>
  );
}

export default JoinPage;
