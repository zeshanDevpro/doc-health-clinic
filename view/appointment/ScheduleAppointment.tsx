"use client";

import { useMemo, useState } from "react";
import { Calendar, momentLocalizer, type SlotInfo } from "react-big-calendar";
import moment from "moment";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { SlotDetails } from "./SlotDetails";
import type { AppointmentBookingState } from "./types";

const localizer = momentLocalizer(moment);

type ScheduleAppointmentProps = {
  booking: AppointmentBookingState;
  onDateSelect: (date: Date) => void;
  onSlotSelect: (slot: string) => void;
  onDepartmentChange: (department: string) => void;
};

export function ScheduleAppointment({
  booking,
  onDateSelect,
  onSlotSelect,
  onDepartmentChange,
}: ScheduleAppointmentProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showSlots, setShowSlots] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const today = useMemo(() => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return start;
  }, []);

  function shiftMonth(offset: number) {
    setCurrentDate((prev) => {
      const next = new Date(prev);
      next.setMonth(next.getMonth() + offset);
      return next;
    });
  }

  function handleDateSelect(slotInfo: SlotInfo) {
    const selected = new Date(slotInfo.start);
    selected.setHours(0, 0, 0, 0);

    if (selected < today) return;

    onDateSelect(selected);
    setShowSlots(true);
    setShowForm(false);
  }

  function handleBackToCalendar() {
    setShowSlots(false);
    setShowForm(false);
  }

  if (showSlots && booking.date) {
    return (
      <SlotDetails
        date={booking.date}
        booking={booking}
        onBack={handleBackToCalendar}
        onSlotSelect={onSlotSelect}
        onDepartmentChange={onDepartmentChange}
        showForm={showForm}
        onShowForm={setShowForm}
      />
    );
  }

  return (
    <div className="appointment-calendar bg-brand-surface p-4 md:p-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-brand-navy">
            {moment(currentDate).format("MMMM YYYY")}
          </span>
          <button
            type="button"
            onClick={() => shiftMonth(-1)}
            className="rounded-full p-1 transition hover:bg-white hover:cursor-pointer"
            aria-label="Previous month"
          >
            <GrFormPrevious size={20} className="text-brand-green" />
          </button>
          <button
            type="button"
            onClick={() => shiftMonth(1)}
            className="rounded-full p-1 transition hover:bg-white hover:cursor-pointer"
            aria-label="Next month"
          >
            <GrFormNext size={20} className="text-brand-green" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <span className="rounded-[9px] bg-white px-3 py-1.5 text-sm font-medium text-brand-grey shadow-md">
            Pakistan Standard Time (PKT)
          </span>
          <div className="flex overflow-hidden rounded-[9px] shadow-md">
            <button
              type="button"
              className="bg-gray-100 px-4 py-1.5 text-sm font-medium text-brand-grey"
            >
              Month
            </button>
          </div>
        </div>
      </div>

      <div className="appointment-calendar-wrapper mt-4" style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          views={["month"]}
          date={currentDate}
          onNavigate={setCurrentDate}
          onSelectSlot={handleDateSelect}
          selectable
          toolbar={false}
          style={{ height: "100%" }}
          dayPropGetter={(date) => {
            const day = new Date(date);
            day.setHours(0, 0, 0, 0);
            if (day < today) {
              return { className: "rbc-off-range-bg" };
            }
            return {};
          }}
        />
      </div>

      <div className="mt-4 flex flex-col flex-wrap items-start justify-start gap-4 py-2 sm:flex-row sm:items-center sm:gap-6">
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
          <span className="h-3 w-3 rounded-full bg-[#c3fccf]" />
          Available dates
        </p>
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
          <span className="h-3 w-3 rounded-full bg-[#ffc3c4]" />
          Unavailable / past dates
        </p>
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
          <span className="h-3 w-3 rounded-full bg-[#dee2f5]" />
          Other dates
        </p>
      </div>
    </div>
  );
}
