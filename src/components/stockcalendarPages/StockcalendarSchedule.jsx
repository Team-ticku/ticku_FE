import React from "react";
import styled from "styled-components";

const ScheduleContainer = styled.div`
  width: 320px;
  margin-top: 40px;
  margin-left: 25px;
  font-family: Arial;
`;

const ScheduleHeader = styled.div`
  //padding: 15px;
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  color: black;
  font-family: sans-serif;
  font-weight: 600;
`;

const ScheduleList = styled.ul`
  padding-left: 0px;
`;

const ScheduleItem = styled.li`
  width: 315px;
  height: 30px;
  border: 2px solid #b2c4df;
  border-radius: 5px;
  margin-top: 10px;
  margin-right: 5px;
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Dotdiv = styled.div`
  color: #b2c4df;
  font-size: 20px;
  margin-right: 5px;
`;
const StockcalendarSchedule = ({ schedules = [] }) => {
  return (
    <>
      <ScheduleContainer>
        <ScheduleHeader>Today's 배당락일</ScheduleHeader>
        <ScheduleList>
          {schedules.length > 0 ? (
            schedules.map((schedule, index) => (
              <li key={index} style={{ listStyle: "square" }}>
                <ScheduleItem>
                  {" "}
                  <Dotdiv>•</Dotdiv> {schedule.schedule}
                </ScheduleItem>
              </li>
            ))
          ) : (
            // <li style={{ listStyle: "inside" }}>아무개</li>
            <ScheduleItem style={{ listStyle: "inside" }}>
              <Dotdiv>•</Dotdiv> 일정 없음
            </ScheduleItem>
          )}
        </ScheduleList>
      </ScheduleContainer>
    </>
  );
};

export default StockcalendarSchedule;
