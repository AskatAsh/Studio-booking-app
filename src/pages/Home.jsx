import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="text-center space-y-6 mt-10 max-w-5xl w-11/12 mx-auto">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Studio Booking App</h1>
        <p className="text-gray-700 mb-10">A modern user friendly app where users can search and filter and book studios.</p>
        <Link to="/studiolist" className="px-8 py-3 rounded-md bg-purple-700 text-white">See Studio List</Link>
      </div>
    </>
  );
};

export default Home;
