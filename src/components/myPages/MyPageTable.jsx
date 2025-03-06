import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Img = styled.img`
  width: 35px;
`;
const Table = styled.table`
  border-spacing: 20px;
`;
const Td = styled.td`
  vertical-align: middle;
`;
const ImgTd = styled(Td)`
  width: 35px;
`;
const TextTd = styled(Td)`
  font-size: 25px;
  color: #2a343d;
`;

function MyPageTable(props) {
  const navigate = useNavigate();

  return (
    <>
      <Table>
        <tbody
          onClick={() => {
            navigate(props.link);
          }}
        >
          <tr>
            <ImgTd>
              <Img src={props.src}></Img>
            </ImgTd>
            <TextTd>{props.text}</TextTd>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default MyPageTable;
