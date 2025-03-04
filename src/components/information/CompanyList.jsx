import styled from "styled-components";
import Star from "../common/Star";

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  padding: 10px 30px;
  border-bottom: 1px solid #b2c4df;
  justify-content: space-between;

  &:first-child {
    border-top: 1px solid #b2c4df;
  }
`;

const CompanySubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CompanyLogos = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* background-color: blue; */
  margin-right: 15px;
  margin-top: 8px;
`;

const CompanyName = styled.p`
  font-size: 22px;
`;

function CompanyList({ company }) {
  if (!company || Object.keys(company).length == 0) {
    return null;
  }

  return (
    <CompanyContainer>
      <CompanySubContainer>
        <CompanyLogos src={company.logo} /> {/* src에 기업 로고 */}
        <CompanyName>{company.name}</CompanyName> {/* {}에 기업 이름 */}
      </CompanySubContainer>

      <Star></Star>
    </CompanyContainer>
  );
}

export default CompanyList;
