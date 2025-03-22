import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // React Icon for close
import Link from "next/link"; // Next.js Link component for routing

interface AnnouncementSectionProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AnnouncementSection = ({ isOpen, closeModal }: AnnouncementSectionProps) => {
  if (!isOpen) return null; // Do not render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#d12f27] text-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-body font-bold">Registration is Now Open!</h3>
          <button
            onClick={closeModal}
            className="text-white text-2xl font-bold"
          >
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-lg mb-4">
          The registration for the FMBFI Examination 2025 is now open! Don't miss your chance to apply. The deadline for registration is{" "}
          <span className="font-extrabold">April 27, 2025</span>.
        </p>
        
        <p className="text-lg mb-6">
          For more information, click{" "}
          <Link href="/apply">
            <span className="inline-block text-white underline hover:text-gray-200 cursor-pointer">
              Apply Now
            </span>
          </Link>.
        </p>
      </div>
    </div>
  );
};

export default AnnouncementSection;
