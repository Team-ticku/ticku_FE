import React, { useState } from "react";
import Calendar from "../../components/common/stockcalendarPages/Stockcalendar";
import StockcalendarSchedule from "../../components/common/stockcalendarPages/StockcalendarSchedule";

function StockcalenPages() {
  const [selectedSchedules, setSelectedSchedules] = useState([]);

  const handleScheduleSelect = (schedules) => {
    setSelectedSchedules(schedules);
  };

  return (
    <div>
      <Calendar onScheduleSelect={handleScheduleSelect} />
      <StockcalendarSchedule schedules={selectedSchedules} />
    </div>
  );
}

export default StockcalenPages;
