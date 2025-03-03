import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookingModal = ({ studio, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [bookings, setBookings] = useState([]);
  const { Open, Close } = studio.Availability;

  // Stop scrolling when the modal opens
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // genrate time slots based on open and closing time
  const generateTimeSlots = () => {
    const slots = [];
    let startTime = new Date(`2000-01-01T${Open}`);
    const endTime = new Date(`2000-01-01T${Close}`);

    while (startTime < endTime) {
      const timeString = startTime.toTimeString().slice(0, 5);
      slots.push(timeString);
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const onSubmit = (data) => {
    const booking = { ...data, studio: studio.Name, type: studio.Type, city: studio.Location.City, area: studio.Location.Area };
    const selectedSlot = `${data.date} ${data.time}`;

    if (bookings.some((b) => `${b.date} ${b.time}` === selectedSlot)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The selected time slot is not available. Please choose another time.",
      });
      return;
    }

    const newBookings = [...bookings, booking];
    setBookings(newBookings);
    localStorage.setItem("bookings", JSON.stringify(newBookings));

    Swal.fire({
      icon: "success",
      title: "Booking Successful",
      text: `Booking confirmed at: ${selectedSlot}`,
    });
    close();
  };

  return (
    <div className="fixed inset-0 bg-[#00000080] flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold mb-3">Book {studio.Name}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          {/* Email */}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Date */}
          <input
            {...register("date", { required: "Date is required" })}
            type="date"
            className="w-full border p-2 rounded"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}

          {/* Time */}
          <select
            {...register("time", { required: "Time is required" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option
                key={slot}
                value={slot}
                disabled={bookings.some((booking) => booking.time === slot)}
              >
                {slot} {bookings.some((booking) => booking.time === slot) ? "(Booked)" : ""}
              </option>
            ))}
          </select>
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}

          {/* Confirm button */}
          <button type="submit" className="btn btn-success w-full">
            Confirm Booking
          </button>

          {/* Cancel button */}
          <button
            type="button"
            onClick={close}
            className="btn btn-secondary w-full"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
