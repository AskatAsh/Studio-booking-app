import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import getStudios from "../api/studioData";
import StudioCard from "../components/StudioCard";
import Loading from "../components/Loading";
import { getDistance } from "geolib";

const StudioList = () => {
  const [studios, setStudios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredStudios, setFilteredStudios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [radius, setRadius] = useState(10000);
  const [locationError, setLocationError] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    getStudios().then((data) => {
      setStudios(data);
      // console.log(data);
      setFilteredStudios(data);
      setLoading(false);
    });
  }, []);

  // Extract unique locations for suggestions
  useEffect(() => {
    const uniqueLocations = [
      ...new Set(studios.map((studio) => studio.Location.Area.toLowerCase())),
    ];
    setSuggestions(uniqueLocations);
  }, [studios]);

  // Debounce logic: Update debouncedSearchTerm after delay
  useEffect(() => {
    const searchHandler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1200);

    return () => clearTimeout(searchHandler);
  }, [searchTerm]);

  // Filter studios based on debounced search term
  useEffect(() => {
    if (!debouncedSearchTerm) {
      setFilteredStudios(studios);
      return;
    }

    const filtered = studios.filter(
      (studio) =>
        studio.Location.Area.toLowerCase().includes(debouncedSearchTerm) ||
        studio.Location.City.toLowerCase().includes(debouncedSearchTerm)
    );

    setFilteredStudios(filtered);
  }, [debouncedSearchTerm, studios]);

  // Handle input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setShowSuggestions(true);
  };

  // Handle auto-suggestion selection
  const handleSelectSuggestion = (area) => {
    setSearchTerm(area);
    setDebouncedSearchTerm(area);
    setShowSuggestions(false);
  };

  const handleSearchByRadius = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoadingLocation(false);
        const { latitude, longitude } = position.coords;

        // Filter studios within the radius
        const nearbyStudios = studios.filter((studio) => {
          const distance = getDistance(
            { latitude, longitude },
            {
              latitude: studio?.Location?.Coordinates?.Latitude,
              longitude: studio?.Location?.Coordinates?.Longitude,
            }
          );
          return distance <= radius;
        });

        setFilteredStudios(nearbyStudios);
        setLocationError(
          nearbyStudios.length
            ? ""
            : `No studios found within ${radius / 1000}KM.`
        );
      },
      (error) => {
        console.log(error.message);
        setLoadingLocation(false);
        setLocationError(
          "Location access denied. Please enable location services."
        );
      }
    );
  };

  const handleReset = () => {
    setSearchTerm("");
    setRadius(10000);
    setLocationError(false);
    setFilteredStudios(studios);
  };

  return (
    <>
      <Helmet>
        <title>Studio List</title>
      </Helmet>
      <div className="max-w-7xl w-11/12 mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 my-8">
          Available Studios
        </h1>

        <div className="flex items-center gap-3 justify-end flex-wrap mb-6">
          {/* Search Input with Auto-Complete */}
          <div className="relative flex-1 min-w-52">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 p-2 w-full rounded bg-white"
            />
            {/* Auto-Suggestions Dropdown */}
            {showSuggestions && searchTerm && (
              <ul className="absolute left-0 right-0 bg-white border border-gray-400 mt-1 rounded shadow-lg z-10">
                {suggestions
                  .filter((area) => area.startsWith(searchTerm))
                  .map((area, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSelectSuggestion(area)}
                    >
                      {area}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Radius Search */}
          <div className="flex space-x-2">
            <select
              value={radius / 1000}
              onChange={(e) => setRadius(Number(e.target.value) * 1000)}
              className="border p-2 rounded bg-white"
            >
              <option value={10}>10 km</option>
              <option value={20}>20 km</option>
              <option value={30}>30 km</option>
            </select>
            <button onClick={handleSearchByRadius} className="btn btn-primary">
              {loadingLocation ? "Locating..." : "Search by Radius"}
            </button>
            <button onClick={handleReset} className="btn btn-outline">
              Reset
            </button>
          </div>
        </div>

        {/* Studio Listings */}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredStudios.length > 0 ? (
              filteredStudios.map((studio) => (
                <StudioCard key={studio.Id} studio={studio} />
              ))
            ) : (
              <>
                {locationError ? (
                  <p className="text-red-500">{locationError}</p>
                ) : (
                  <p className="text-red-500">No studios found.</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default StudioList;
