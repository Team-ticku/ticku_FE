import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../components/common/stockcalendarPages/Stockcalendar";
import StockcalendarSchedule from "../../components/common/stockcalendarPages/StockcalendarSchedule";
import BottomNavBar from "../../components/common/bottomNavBars/BottomNavBar";

const Wrap = styled.div`
  width: 390px;
`;

function StockcalenPages({ display }) {
  const [selectedSchedules, setSelectedSchedules] = useState([]);

  const handleScheduleSelect = (schedules) => {
    setSelectedSchedules(schedules);
  };

  return (
    <Wrap>
      <BottomNavBar display={display} />
      <Calendar onScheduleSelect={handleScheduleSelect} />
      <StockcalendarSchedule schedules={selectedSchedules} />
    </Wrap>
  );
}

export default StockcalenPages;
