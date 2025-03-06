import { useState } from "react";
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
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isIdDuplicate, setIsIdDuplicate] = useState(false);

  // 아이디 중복 체크 함수
  /*const checkIdDuplicate = async (id) => {
    try {
      const response = await axios.post("http://localhost:5000/api/check-id", {
        id,
      });
      setIsIdDuplicate(response.data.isDuplicate); // 서버에서 중복 여부 받아오기
    } catch (err) {
      console.error(err);
      setError("아이디 중복 체크 실패");
    }
  };*/

  // 아이디 입력 변경 시 중복 체크
  /*useEffect(() => {
    if (id.length > 0) {
      checkIdDuplicate(id);
    } else {
      setIsIdDuplicate(false);
    }
  }, [id]);*/

  const handleJoin = async () => {
    console.log("회원가입");

    /*if (isIdDuplicate) {
      setError("아이디가 중복되었습니다.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        id,
        password,
        name,
      });
      console.log(response.data); // 응답 처리
      // 성공 시 처리 로직 추가 (예: 페이지 이동)
    } catch (err) {
      console.error(err);
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
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

          {/* <DuplicateID>중복된 아이디입니다</DuplicateID> */}
          {isIdDuplicate && id.length > 0 && (
            <DuplicateID>중복된 아이디입니다</DuplicateID>
          )}

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
