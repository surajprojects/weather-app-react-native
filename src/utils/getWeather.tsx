import { WeatherTypes } from "./weather.types";

export default async function getWeather(location: string): Promise<false | WeatherTypes> {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=6c4429b3eb4d4691ad5114853242901&q=${location}&aqi=no&days=3`,
    );
    const result: WeatherTypes = await response.json();
    if (response.ok) {
      return result;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Unable to get data, something went wrong!!!");
    return false;
  }
}
