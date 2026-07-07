"use client";

import type { ReactNode } from "react";
import {
  MdAccessTime,
  MdCalendarToday,
  MdLanguage,
  MdLocationOn,
  MdPayments,
  MdSchedule,
} from "react-icons/md";
import { company } from "@/constants";
import type { AppointmentBookingState } from "./types";

type SummaryItem = {
  icon: ReactNode;
  heading: string;
  desc: string;
};

type AppointmentSummaryProps = {
  booking: AppointmentBookingState;
};

function formatDate(date: Date | null) {
  if (!date) return "Choose Date";
  return date.toLocaleDateString("en-PK", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function AppointmentSummary({ booking }: AppointmentSummaryProps) {
  const items: SummaryItem[] = [
    {
      icon: <MdPayments className="h-5 w-5 text-brand-green" />,
      heading: "From PKR 2,500",
      desc: "Consultation Fee",
    },
    {
      icon: <MdAccessTime className="h-5 w-5 text-brand-green" />,
      heading: "30–45 minutes",
      desc: "Duration",
    },
    {
      icon: <MdCalendarToday className="h-5 w-5 text-brand-green" />,
      heading: formatDate(booking.date),
      desc: "Date",
    },
    {
      icon: <MdSchedule className="h-5 w-5 text-brand-green" />,
      heading: booking.slot ?? "Choose Time",
      desc: "Time",
    },
    {
      icon: <MdLocationOn className="h-5 w-5 text-brand-green" />,
      heading: company.locationShort,
      desc: "Clinic Location",
    },
    {
      icon: <MdLanguage className="h-5 w-5 text-brand-green" />,
      heading: "Pakistan Standard Time",
      desc: "Time Zone",
    },
  ];

  return (
    <div className="rounded-br-[9px] rounded-tr-[9px] px-4 py-6 md:px-6">
      <h2 className="text-2xl font-semibold text-brand-navy md:text-3xl">
        {booking.department}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-brand-grey">
        Book your visit at MedCare Health Clinic in G-8 Markaz. Our team will
        confirm your appointment via WhatsApp or SMS within one hour.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.desc}
            className="flex min-w-[180px] items-center gap-3 rounded-[9px] bg-white px-3 py-3 shadow-md ring-1 ring-gray-100"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
              {item.icon}
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-brand-navy">
                {item.heading}
              </h3>
              <p className="text-xs text-brand-grey">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
