import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const PassWordInput = styled.input`
  width: 95%;
  height: 46px;
  margin-top: 20px;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px #b2c4df;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #bebebe;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 47px;
  border-radius: 10px;
  border: none;
  background-color: #b2c4df;
  color: #ffffff;
  margin-top: 40px;
  font-size: 16px;
`;

const JoinContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

const JoinA = styled.a`
  text-decoration: none;
  color: #b2c4df;
  margin-top: 20px;
  display: block;
  &:visited {
    color: #b2c4df;
  }
`;

function LoginPage() {
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    //console.log("로그인");
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        navigate("/main");
      } else {
        console.log("로그인 실패 : " + data.message);
      }
    } catch (err) {
      console.log(err);
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
          <PassWordInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton onClick={handleLogin}>로그인</LoginButton>
          <JoinContainer>
            <JoinA href="/join">회원가입</JoinA>
          </JoinContainer>
        </Container>
      </Div>
    </>
  );
}

export default LoginPage;
