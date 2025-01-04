
import { SearchType } from "../types";

const useWeather = () => {
  const fecthWather = async (search: SearchType) => {
    const appId="27d4d98d351d7017bff7435ca3e1ec23"
    try {
        const geoUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
        const result = await fetch(geoUrl)
        const data = await result.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
  };
  return {
    fecthWather,
  };
};

export default useWeather;
