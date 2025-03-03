import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="text-center max-w-5xl w-11/12 mx-auto flex items-center justify-center h-svh">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800">
            Welcome to Studio Booking App
          </h1>
          <p className="text-gray-700 mb-10">
            A modern user friendly app where users can search and filter and
            book studios.
          </p>
          <Link to="/studiolist" className="btn btn-primary px-8">
            See Studio List
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
