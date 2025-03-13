import styled from "styled-components";
import Star from "../../components/common/Star";

const CompanyDiv = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  padding: 50px 0;
  padding-left: 25px;
`;

const TextDiv = styled.div`
  display: block;
  width: 90%;
`;

const CompanySubDiv = styled.div`
  display: flex;
  flex: 1;
  //margin-right: 15px;
  //gap: 5px;
  justify-content: stretch;
  align-items: baseline;
  padding-bottom: 10px;
`;

const CompanyName = styled.p`
  font-size: 20px;
  margin: 0;
  margin-right: 10px;
  width: 200px;
`;

const CompanyCode = styled.span`
  color: #b3b3b3;
  font-size: 20px;
  margin: 0;
  width: 200px;
`;

const CompanyPrice = styled.span`
  font-size: 20px;
`;

const CompanyPriceChange = styled.span`
  font-size: 20px;
  /* margin-left: 110px; */

  color: ${(props) => (props.change.startsWith("-") ? "blue" : "red")};
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
  /* margin-left: auto; */
  justify-content: space-between;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function CompanyInfo(props) {
  const { logo, altText, name, code, price, change } = props;

  return (
    <CompanyDiv>
      <TextDiv>
        <CompanySubDiv>
          <CompanyName>{name}</CompanyName>
          <CompanyCode>{code}</CompanyCode>
          <StarContainer>
            <Star />
          </StarContainer>
        </CompanySubDiv>
        <PriceWrap>
          <CompanyPrice>{price} 원</CompanyPrice>
          <CompanyPriceChange change={change}>{change} 원</CompanyPriceChange>
        </PriceWrap>
      </TextDiv>
    </CompanyDiv>
  );
}

export default CompanyInfo;
