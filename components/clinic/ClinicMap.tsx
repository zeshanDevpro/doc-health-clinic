import { company } from "@/constants";

export function ClinicMap() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
      <iframe
        src={company.mapEmbedUrl}
        title="MedCare Health Clinic location on Google Maps"
        className="h-[360px] w-full border-0 md:h-[420px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
