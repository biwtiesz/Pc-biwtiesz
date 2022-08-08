import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { formatRelative, subDays } from "date-fns";
import { es, th } from "date-fns/locale";
import "./test.css";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
registerLocale("th", th);
const Example = () => {
  console.log(
    formatRelative(subDays(new Date(), 3), new Date(), { locale: th })
  );
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        locale="th"
        dateFormat="Pp"
      />
      <input type="date" />
    </>
  );
};

export default Example;
