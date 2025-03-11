
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
  const [scheduleData, setScheduleData] = useState([]); // scheduleData state 추가

  useEffect(() => {
    // 컴포넌트가 마운트될 때 데이터를 가져옴
    fetch("http://localhost:5000/calens")
      .then((response) => response.json())
      .then((data) => {
        // MongoDB에서 가져온 date 문자열을 Date 객체로 변환
        const transformedData = data.map((item) => ({
          ...item,
          date: new Date(item.date + "T00:00:00"), // "2025-03-11" 형태를 Date 객체로 변환
        }));
        setScheduleData(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleScheduleSelect = (schedules) => {
    setSelectedSchedules(schedules);
  };

  return (

    <div>
      <Calendar
        onScheduleSelect={handleScheduleSelect}
        scheduleData={scheduleData} // scheduleData props 전달
      />
      <StockcalendarSchedule schedules={selectedSchedules} />
      <BottomNavBar />
    </div>

  );
}

export default StockcalenPages;
