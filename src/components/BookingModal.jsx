import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ studio, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // stop scrolling when the model opens
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onSubmit = (data) => {
    const booking = { ...data, studio: studio.Name };

    // Store in localStorage
    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    alert("Booking Confirmed!");
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
          <input
            {...register("time", { required: "Time is required" })}
            type="time"
            className="w-full border p-2 rounded"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}

          {/* Buttons */}
          <button type="submit" className="btn btn-success w-full">
            Confirm Booking
          </button>
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
