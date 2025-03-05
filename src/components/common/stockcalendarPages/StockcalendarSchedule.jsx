import React from "react";
import styled from "styled-components";

const ScheduleContainer = styled.div`
  width: 320px;
  margin-top: 15px;
  font-family: Arial;
`;

const ScheduleHeader = styled.div`
  padding: 15px;
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
  width: 300px;
  height: 30px;
  border: 2px solid #b2c4df;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding: 10px;
  list-style: none;
`;

const StockcalendarSchedule = ({ schedules = [] }) => {
  return (
    <ScheduleContainer>
      <ScheduleHeader>Today's 배당락일</ScheduleHeader>
      <ScheduleList>
        {schedules.length > 0 ? (
          schedules.map((schedule, index) => (
            <ScheduleItem key={index}>{schedule.schedule}</ScheduleItem>
          ))
        ) : (
          <ScheduleItem>일정 없음</ScheduleItem>
        )}
      </ScheduleList>
    </ScheduleContainer>
  );
};

export default StockcalendarSchedule;
