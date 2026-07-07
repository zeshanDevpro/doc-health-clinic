"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";
import { SelectInputDropdown } from "@/components/ui/SelectInputDropdown";
import { brandButtonClassName, departments } from "@/constants";
import type { AppointmentBookingState } from "./types";

const inputClassName =
  "w-full rounded-[9px] border border-gray-200 border-b-2 border-b-brand-green bg-white px-3 py-2.5 text-sm shadow-md outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";

const departmentOptions = departments.map((dept) => ({
  value: dept,
  label: dept,
}));

type PersonalDetailsProps = {
  booking: AppointmentBookingState;
  onBack: () => void;
  onDepartmentChange: (department: string) => void;
};

export function PersonalDetails({
  booking,
  onBack,
  onDepartmentChange,
}: PersonalDetailsProps) {
  const router = useRouter();
  const [department, setDepartment] = useState(booking.department);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!department) {
      setError("Please select a department.");
      return;
    }

    router.push("/appointment/scheduled");
  }

  return (
    <div className="px-4 py-4 md:px-6">
      <button
        type="button"
        onClick={onBack}
        className="mb-4 flex items-center gap-1 text-sm font-semibold text-brand-green transition hover:text-brand-navy"
      >
        <IoChevronBack size={20} />
        Back to time slots
      </button>

      <h2 className="text-lg font-semibold text-brand-navy">Enter your details</h2>
      <p className="mt-1 text-sm text-brand-grey">
        {booking.date?.toLocaleDateString("en-PK", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        at {booking.slot}
      </p>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-brand-navy">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              required
              placeholder="Enter your first name"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-brand-navy">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              required
              placeholder="Enter your last name"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-navy">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-navy">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+92 300 000 0000"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-medium text-brand-navy">
              City / Area <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              placeholder="e.g. Islamabad"
              className={inputClassName}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="department" className="mb-2 block text-sm font-medium text-brand-navy">
              Department <span className="text-red-500">*</span>
            </label>
            <SelectInputDropdown
              id="department"
              aria-label="Select department"
              options={departmentOptions}
              selectedValue={department}
              onValueChange={(value) => {
                setDepartment(value);
                onDepartmentChange(value);
              }}
              placeholder="Select department"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="flex items-start gap-2">
            <input type="checkbox" name="agreement" required className="mt-1" />
            <span className="text-xs leading-relaxed text-brand-grey">
              By proceeding, you confirm that you have read and agree to MedCare
              Health Clinic&apos;s terms of use and privacy notice.
            </span>
          </label>
        </div>

        {error && (
          <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}

        <div className="mt-6 flex justify-center">
          <button type="submit" className={brandButtonClassName}>
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
