import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import getStudios from "../api/studioData";

const StudioList = () => {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    getStudios().then((data) => {
      // console.log(data);
      setStudios(data);
    })
  }, []);

  return (
    <>
      <Helmet>
        <title>Studio List</title>
      </Helmet>
      <div className="max-w-7xl w-11/12 mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 my-8">Available Studios</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {studios.map((studio) => (
          <h2>{studio?.Name}</h2>
        ))}
      </div>
    </div>
    </>
  );
};

export default StudioList;
