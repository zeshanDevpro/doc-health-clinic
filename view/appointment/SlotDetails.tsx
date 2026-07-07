"use client";

import { IoChevronBack } from "react-icons/io5";
import { appointmentTimeSlots } from "@/constants";
import type { AppointmentSlot } from "./types";
import { PersonalDetails } from "./PersonalDetails";
import type { AppointmentBookingState } from "./types";

function buildSlotsForDate(date: Date): AppointmentSlot[] {
  const day = date.getDay();
  const isSunday = day === 0;

  return appointmentTimeSlots.map((time, index) => ({
    time,
    available: !isSunday && index !== 7 && index !== 10,
  }));
}

type SlotDetailsProps = {
  date: Date;
  booking: AppointmentBookingState;
  onBack: () => void;
  onSlotSelect: (slot: string) => void;
  onDepartmentChange: (department: string) => void;
  showForm: boolean;
  onShowForm: (show: boolean) => void;
};

export function SlotDetails({
  date,
  booking,
  onBack,
  onSlotSelect,
  onDepartmentChange,
  showForm,
  onShowForm,
}: SlotDetailsProps) {
  const slots = buildSlotsForDate(date);

  if (showForm && booking.slot) {
    return (
      <PersonalDetails
        booking={booking}
        onBack={() => onShowForm(false)}
        onDepartmentChange={onDepartmentChange}
      />
    );
  }

  return (
    <div className="px-4 py-4 md:px-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-sm font-semibold text-brand-green transition hover:text-brand-navy"
      >
        <IoChevronBack size={20} />
        {date.toLocaleDateString("en-PK", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </button>

      <h2 className="text-lg font-semibold text-brand-navy">Available time slots</h2>
      <p className="mt-1 text-sm text-brand-grey">
        Select a slot to continue with your details.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {slots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            disabled={!slot.available}
            onClick={() => {
              onSlotSelect(slot.time);
              onShowForm(true);
            }}
            className={`min-w-[88px] rounded-md px-3 py-2 text-center text-xs font-semibold transition ${
              slot.available
                ? "bg-[#c6f7d0] text-brand-navy hover:bg-brand-green/30"
                : "cursor-not-allowed bg-[#fdc8c9] text-brand-grey"
            }`}
          >
            <p>{slot.time}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
