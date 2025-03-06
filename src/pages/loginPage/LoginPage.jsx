import { useState } from "react";
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    console.log("로그인");

    // 백엔드랑 연결할 때 사용
    /*e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        id,
        password,
      });

      if (response.data.token) {
        alert("로그인 성공!");
        localStorage.setItem("token", response.data.token); // JWT 저장
        window.location.href = "/dashboard"; // 로그인 후 페이지 이동
      } else {
        alert("로그인 실패: " + response.data.message);
      }
    } catch (error) {
      console.error("로그인 오류:", error);
      alert("서버 오류 또는 아이디/비밀번호가 잘못되었습니다.");
    }*/
  };

  return (
    <>
      <Div>
        <Container>
          <Ticko></Ticko>

          <IdInput
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
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
