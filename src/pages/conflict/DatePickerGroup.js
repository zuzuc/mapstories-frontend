import React, { useState } from 'react'
import DatePicker from "react-datepicker";

function DatePickerGroup() {
    /* -------- beginning of date picker --------- */
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDate = (date) => { setStartDate(date);}
    const handleEndDate = (date) => { setEndDate(date);}
    
    const transStartDate = (startDate) => {
      const rs = startDate.getDate() + "-" + parseInt(startDate.getMonth()+1) + "-" + startDate.getFullYear();
      return rs;
    }
    const transEndDate = (endDate) => {
      const re = endDate.getDate() + "-" + parseInt(endDate.getMonth()+1) + "-" + endDate.getFullYear();
      return re;
    }
    
    // const date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    const resultStartDate = transStartDate(startDate);
    const resultEndDate = transEndDate(endDate);
    // console.log(transStartDate(startDate))
    // console.log(transStartDate(endDate))
    
    return (
      <div>
        <div>
          <label htmlFor="start_date">Start Date </label>
          <DatePicker selected={startDate} onChange={handleStartDate} peekNextMonth showMonthDropdown showYearDropdown 
            dropdownMode="select" selectsStart dateFormat="dd-MM-yyyy" />
        </div>
        <div>
          <label htmlFor="end_date">End Date </label>
          <DatePicker selected={endDate} onChange={handleEndDate} peekNextMonth showMonthDropdown showYearDropdown 
            dropdownMode="select" selectsEnd minDate={startDate} dateFormat="dd-MM-yyyy" />
        </div>

      </div>
    );
  };
  /* -------- end of date picker --------- */  

export default DatePickerGroup
