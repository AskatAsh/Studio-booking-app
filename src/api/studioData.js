import axios from "axios";

const api_url =
  "https://gist.githubusercontent.com/rash3dul-islam/88e1565bea2dd1ff9180ff733617a565/raw";

const getStudios = async () => {
  try {
    const res = await axios.get(api_url);
    // console.log(res.data.Studios);
    return res.data.Studios;
  } catch (error) {
    console.error("Error fetching studios: ", error);
    return [];
  }
};

export default getStudios;
