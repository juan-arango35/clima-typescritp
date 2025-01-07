import { useState } from "react";
import { SearchType } from "../types";
import { z } from "zod";
/*import { useWeatherType } from '../components/form/Form';
 */

export const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
  }),
});

type Weather = z.infer<typeof Weather>;

const intialState = {
  name: "",
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0,
  },
};

const useWeather = () => {
  const [weather, setWeather] = useState<Weather>(intialState);

  const [loading, setLoading] = useState(false);

  const fecthWather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY;
    setLoading(true);
    setWeather(intialState);
    try {
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;
      const result = await fetch(geoUrl);
      const data = await result.json();
     

      const climaData = await data[0];
      console.log("datos del clima",climaData);
   
      const lat = climaData.lat;
      const lon = climaData.lon;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      );
      const dataClima = await response.json();
     /*  console.log(dataClima); */
      const climaNubes = await dataClima;
    
    
      const {
        name,
        main: { temp, temp_min, temp_max },
      } = climaNubes;
      setWeather({ name, main: { temp, temp_min, temp_max } });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //funcion para mostar el componente clima si esuq existe algo

  return {
    weather,
    loading,
    fecthWather,
  };
};

export default useWeather;
