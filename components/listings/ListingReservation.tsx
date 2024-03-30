"use client";


import { Range } from "react-date-range";
import Button from "../Button";
import Calendar from "../Inputs/Calendar";
interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-5000">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button
        disabled={disabled}
        label="Reserve"
        onClick={onSubmit}
        />
      </div>
      <div className="p-4 flex items-center flex-row font-semibold text-lg justify-between">
        <div> total </div>
        <div> $ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
