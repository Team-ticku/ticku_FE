import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  width: 250px;
  /* margin-bottom: 10px; */
  margin-left: 10px;
`;

const TabP = styled.p`
  flex: 1;
  padding-left: 20px;
  border: none;
  background-color: transparent;
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-top: 8px;
`;

function VolumeInfo() {
  return (
    <TabContainer>
      <TabP>거래량</TabP>
    </TabContainer>
  );
}

export default VolumeInfo;
