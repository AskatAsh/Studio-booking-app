import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import BookingModal from "./BookingModal";

const StudioCard = ({ studio }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-gray-800 flex flex-col gap-2 h-full">
      <h2 className="text-xl font-bold mb-1">{studio?.Name}</h2>
      <p>{studio?.Type}</p>
      <p className="flex gap-2 items-start">
        <FaLocationDot size={16} className="my-1" /> {studio?.Location?.Area}, {studio?.Location?.City}
      </p>
      <p className="flex gap-2 items-start">
        Address: {studio?.Location?.Address}
      </p>
      <p className="flex items-center gap-1 flex-wrap">
        {studio?.Amenities.map((amenity, idx) => (
          <strong key={idx} className="p-1 rounded-sm text-xs bg-gray-100">
            {amenity}
          </strong>
        ))}
      </p>
      <div className="flex item-center justify-between gap-3 flex-wrap">
        <p className="flex items-center">
          <TbCurrencyTaka size={24} />
          {studio?.PricePerHour} {studio?.Currency} / hour
        </p>
        <p className="flex items-center">
          {studio?.Rating} / 5 <FaStar className="text-yellow-500 ml-2" />
        </p>
      </div>
      <div className="flex-1 flex items-end mt-2">
        <button
          className="btn btn-primary w-full"
          onClick={() => setIsOpen(true)}
        >
          Book Now
        </button>
      </div>
      {isOpen && (
        <BookingModal studio={studio} close={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default StudioCard;
