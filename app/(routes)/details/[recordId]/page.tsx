"use client";
import { useEffect, useState } from "react";
import { DoctorsData } from "@/app/_data";
import { IDoctorData } from "@/app/_interfaces";
import DoctorImage from "../_components/DoctorImage";
import SuggestedDoctors from "../_components/SuggestedDoctors";
import DoctorBody from "../_components/DoctorBody";
import "./index.css";

/*~~~~~~~~$ Details Component $~~~~~~~~*/
const Details = ({ params }: { params: { recordId: string } }) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [doctorData, setDoctorData] = useState<IDoctorData | null>(null);
  const [suggestedDoctors, setSuggestedDoctors] = useState<IDoctorData[]>([]);

  /*~~~~~~~~$ Effects $~~~~~~~~*/
  useEffect(() => {
    const doctorData = DoctorsData.find(
      (doctor: IDoctorData) => doctor.id === params.recordId
    );
    setDoctorData(doctorData || null);

    // Get doctors with the same specialization
    const sameSpecializationDoctors = DoctorsData.filter(
      (doctor: IDoctorData) =>
        doctor.specialty === doctorData?.specialty &&
        doctor.id !== params.recordId
    );
    setSuggestedDoctors(sameSpecializationDoctors);
  }, [params.recordId]);

  /*~~~~~~~~$ Render $~~~~~~~~*/
  return (
    <section className="container">
      {/*~~~~~~~~$ Doctor Data $~~~~~~~~*/}
      {doctorData && (
        <div className="mx-auto ring-2 ring-blue-900 rounded-xl p-6 mb-8 shadow-card-shadow">
          <div className="flex flex-col items-center md:flex-row md:space-x-10">
            {/*~~~~~~~~$ Image $~~~~~~~~*/}
            <DoctorImage image={doctorData.image} name={doctorData.name} />

            {/*~~~~~~~~$ Body $~~~~~~~~*/}
            <DoctorBody doctorData={doctorData} />
          </div>
        </div>
      )}

      {/*~~~~~~~~$ Suggested Doctors Carousel $~~~~~~~~*/}
      <SuggestedDoctors suggestedDoctors={suggestedDoctors} />
    </section>
  );
};

export default Details;
