import styled, { keyframes } from "styled-components";

const AccordionItemWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 30px;
  transform: ${(props) =>
    props.$isPinned ? "translateY(0px)" : "translateY(1px)"};
  transition: transform 0.3s ease;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
`;

const Pin = styled.img`
  width: 23px;
  height: 23px;
`;

const Name = styled.p`
  margin: 0;
  font-size: 25px;
  flex-grow: 1;
  margin-left: 20px;
`;

const Arrow = styled.img`
  height: 50px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const AccordionContent = styled.div`
  display: flex;
  overflow: hidden;
  max-height: ${(props) => (props.$isOpen ? "240px" : "0px")};
  transition: max-height 0.3s ease-in-out;
`;

const ChartContainer = styled.div`
  background-color: lightblue;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 230px;
`;

const DoughnutChart = styled.div`
  background-color: lightgrey;
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const LegendContainer = styled.div`
  background-color: lightcoral;
  height: 230px;
  width: 30%;
`;

function MyPortfolioAccordion({
  id,
  isPinned,
  name,
  isOpen,
  handleToggle,
  handlePinned,
}) {
  return (
    <>
      <AccordionItemWrapper $isPinned={isPinned}>
        <AccordionHeader onClick={() => handleToggle(id)}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handlePinned(id);
            }}
          >
            {isPinned ? (
              <Pin src="../../public/images/pin-fill.png" alt="고정된 핀" />
            ) : (
              <Pin
                src="../../public/images/pin-outline.png"
                alt="고정 안 된 핀"
              />
            )}
          </div>

          <Name>{name}</Name>

          <div>
            <Arrow
              $isOpen={isOpen}
              src="../../public/images/arrow.png"
              alt="화살표 이미지"
            />
          </div>
        </AccordionHeader>

        <AccordionContent $isOpen={isOpen}>
          <ChartContainer>
            <DoughnutChart></DoughnutChart>
          </ChartContainer>
          <LegendContainer></LegendContainer>
        </AccordionContent>
      </AccordionItemWrapper>
    </>
  );
}

export default MyPortfolioAccordion;
