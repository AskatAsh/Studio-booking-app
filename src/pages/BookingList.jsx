import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <>
      <Helmet>
        <title>Booking List</title>
      </Helmet>
      <div className="max-w-7xl w-11/12 mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 my-8">
          Available Bookings
        </h1>
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Studio Type</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="text-center border-t">
                    <td className="p-3 border">{booking.name}</td>
                    <td className="p-3 border">{booking.email}</td>
                    <td className="p-3 border">{booking.type}</td>
                    <td className="p-3 border">
                      {booking.Location?.City}, {booking.Location?.Area}
                    </td>
                    <td className="p-3 border">
                      {booking.date} {booking.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No bookings available.</p>
        )}
      </div>
    </>
  );
};

export default BookingList;
