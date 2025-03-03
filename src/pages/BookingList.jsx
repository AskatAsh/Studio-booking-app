import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
            <table className="table">
              <thead>
                <tr className="bg-gray-100">
                  <th>NO.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Studio Type</th>
                  <th>Location</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-base-300">
                    <td>{index+1}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.type}</td>
                    <td>
                      {booking?.area}, {booking?.city}
                    </td>
                    <td>
                      {booking.date} {booking.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 mb-6">No bookings available.</p>
            <Link to="/studiolist" className="btn btn-primary px-8 mx-auto">
              See Studio List
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BookingList;
