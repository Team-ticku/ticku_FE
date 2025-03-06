import styled from "styled-components";
import Star from "../common/Star";

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  padding: 10px 30px;
  justify-content: space-between;
`;

const CompanySubContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CompanyLogos = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: blue; */
  margin-right: 15px;
  margin-top: 9px;
`;

const CompanyName = styled.p`
  font-size: 20px;
`;

const StarDiv = styled.div`
  margin-right: 25px;
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

      <StarDiv>
        <Star defaultStarred={company.isFavorite}></Star>
      </StarDiv>
    </CompanyContainer>
  );
}

export default CompanyList;
