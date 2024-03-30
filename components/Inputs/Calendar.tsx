"use client"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange, Range, RangeKeyDict } from "react-date-range"

interface CalendarProps {
    value:Range;
    onChange: (value:RangeKeyDict) => void;
    disabledDates?: Date[]
}
const Calendar = ({value,onChange,disabledDates}:CalendarProps) => {
  return (
    <DateRange 
    rangeColors={['#f76e82']}
        onChange={onChange}
        ranges={[value]}
        date={new Date()}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
    />
  )
}

export default Calendar