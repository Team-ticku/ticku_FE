import React, { useState, useRef } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 360px; //현재 달력의 너비
  font-family: sans-serif;
  margin-left: 8px;
  margin-top: 12px;
  position: relative;
`;

//화살표 Nav 간격 조정
const CalendarHeader = styled.div`
  background-color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MonthLabel = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  cursor: pointer;
`;

//탐색 버튼
const NavButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  cursor: pointer;
`;

//달력 요일 표시줄
const WeekdaysRow = styled.div`
  display: flex;
`;

const Weekday = styled.span`
  flex: 1;
  text-align: center;
  padding: 5px;
  color: #000000;
  font-size: 12px;
  font-weight: bolder;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
`;

const DayCell = styled.div`
  padding: 10px;
  width: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid transparent;
  transition: 0.2s;
  cursor: pointer;
  &.today {
    background-color: #4287f5;
  }
  &.selected {
    border: 2px solid #b2c4df;
    color: #000000;
  }
  &.other-month {
    color: #999;
  }
  &.has-schedule {
    border: 2px solid #b2c4df;
    background-color: #b2c4df;
    color: #ffffff;
    opacity: 0.6;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const MonthOption = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

//월 이름을 배열로 정의
const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

//달력 목록 선택
const MonthDropdown = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%); //가로 중앙 정렬
  background: white;
  border: 1px solid #ddd;
  z-index: 10;
  width: 80px;
  max-height: 110px; //최대 높이 제한
  overflow-y: auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

//날짜 비교 함수
const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const scheduleData = [
  { date: new Date(2025, 2, 10), schedule: "삼성전자 배당일" },
  { date: new Date(2025, 2, 10), schedule: "하이닉스 배당일" },
  { date: new Date(2025, 2, 10), schedule: "대한항공 배당일" },
];

const Calendar = ({ onScheduleSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);

  //useRef를 통해 monthLabelRef를 초기화
  const monthLabelRef = useRef(null);

  const handleDateClick = (day) => {
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day.day
    );
    setSelectedDate(clickedDate);

    const events = scheduleData.filter((schedule) =>
      isSameDay(schedule.date, clickedDate)
    );

    if (onScheduleSelect) {
      onScheduleSelect(events);
    }
  };

  const getDaysArray = () => {
    const days = [];
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayIndex = firstDayOfMonth.getDay(); //3월 1일 인덱스스

    for (let i = 1; i <= firstDayIndex; i++) {
      days.push({
        day: " ",
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
        hasSchedule: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const hasSchedule = scheduleData.some((schedule) =>
        isSameDay(schedule.date, currentDay)
      );
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: isSameDay(currentDay, new Date()),
        isSelected: selectedDate && isSameDay(currentDay, selectedDate),
        hasSchedule,
      });
    }
    return days;
  };

  const daysArray = getDaysArray();

  return (
    <CalendarContainer>
      <CalendarHeader>
        <NavButton
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
            )
          }
        >
          <img src="/images/calen-arrow1.png" alt="다음 달" />
        </NavButton>
        <MonthLabel
          ref={monthLabelRef}
          onClick={() => setMonthDropdownOpen(!isMonthDropdownOpen)}
        >
          {`${currentDate.getMonth() + 1}월`}
        </MonthLabel>

        {/* Dropdown 목록 기능 추가  */}
        {isMonthDropdownOpen && (
          <MonthDropdown>
            {monthNames.map((month, index) => (
              <MonthOption key={index} onClick={() => selectMonth(index)}>
                {month}
              </MonthOption>
            ))}
          </MonthDropdown>
        )}

        <NavButton
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )
          }
        >
          <img src="/images/calen-arrow2.png" alt="다음 달" />
        </NavButton>
      </CalendarHeader>
      <WeekdaysRow>
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day, index) => (
          <Weekday key={index}>{day}</Weekday>
        ))}
      </WeekdaysRow>
      <DaysGrid>
        {daysArray.map((day, index) => {
          let className = "";
          if (day.isToday) className += " today";
          if (day.isSelected) className += " selected";
          if (!day.isCurrentMonth) className += " other-month";
          if (day.hasSchedule) className += " has-schedule";
          return (
            <DayCell
              key={index}
              className={className}
              onClick={() => handleDateClick(day)}
            >
              {day.day}
            </DayCell>
          );
        })}
      </DaysGrid>
    </CalendarContainer>
  );
};

export default Calendar;
