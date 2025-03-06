import styled from "styled-components";

const CompanyDiv = styled.div`
  max-width: 400px;
  display: flex;
  align-items: center;
  padding: 50px 0;
  padding-left: 25px;
`;

const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 10px;
  background-color: blue;
  margin-right: 15px;
`;

const TextDiv = styled.div`
  display: block;
`;

const CompanySubDiv = styled.div`
  display: flex;
  flex: 1;
  margin-right: 15px;
  gap: 5px;
  align-items: baseline;
  padding-bottom: 10px;
`;

const CompanyName = styled.p`
  font-size: 20px;
  margin: 0;
`;

const CompanyCode = styled.span`
  color: #b3b3b3;
  font-size: 20px;
  margin: 0;
`;

const CompanyPrice = styled.span`
  font-size: 20px;
`;

const CompanyPriceChange = styled.span`
  font-size: 20px;
  margin-left: 110px;

  color: ${(props) => (props.change.startsWith("-") ? "blue" : "red")};
`;
const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: auto;
`;

function CompanyInfo(props) {
  const { logo, altText, name, code, price, change } = props;

  return (
    <CompanyDiv>
      <CompanyLogo src={logo} alt={altText} />
      <TextDiv>
        <CompanySubDiv>
          <CompanyName>{name}</CompanyName>
          <CompanyCode>{code}</CompanyCode>
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
