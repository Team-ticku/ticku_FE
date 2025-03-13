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

const CompanyName = styled.p`
  font-size: 20px;
  margin-left: 20px;
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
        <CompanyName>{company.name}</CompanyName> {/* {}에 기업 이름 */}
      </CompanySubContainer>
      <StarDiv>
        <Star
          defaultStarred={company.isFavorite}
          onToggleFavorite={company.onToggleFavorite}
        ></Star>
      </StarDiv>
    </CompanyContainer>
  );
}

export default CompanyList;
