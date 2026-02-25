import { useState } from "react";
import SearchBox from "../components/searchBox";
import { MapPin, Sun } from "lucide-react-native";
import { currentDate } from "../utils/dateAndTime";
import { WeatherTypes } from "../utils/weather.types";
import { Image, ScrollView, Text, View } from "react-native";

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherTypes>();
  return (
    <>
      <ScrollView className="flex-1 p-5">
        {/* Search Location */}
        <SearchBox setWeatherData={setWeatherData} />
        {/* Wrapper */}
        <View className="flex items-center py-8">
          {/* Weather Icon */}
          {weatherData && (
            <Image
              source={{ uri: `https:${weatherData.current.condition.icon}` }}
              style={{
                width: 120,
                height: 120,
              }}
            />
          )}
          {/* Temperature Wrapper */}
          <View className="flex flex-row py-4">
            <Text className="text-8xl text-gray-800">
              {weatherData ? weatherData.current.temp_c : 12}
            </Text>
            <Text className="text-7xl translate-y-1 font-normal text-gray-800">&#176;</Text>
            <Text className="text-4xl translate-y-1.5 font-medium text-gray-800">C</Text>
          </View>
          {/* Day & Time */}
          <Text className="text-xl text-gray-600">
            {weatherData
              ? `${currentDate().fullDay}, ${weatherData.location.localtime.split(" ")[1]}`
              : "Monday, 12:00"}
          </Text>
          {/* Weather Status */}
          <Text className="text-xl text-gray-600 mt-1">
            {weatherData ? weatherData.current.condition.text : "Mostly Cloudy"}
          </Text>
          {/* Location Wrapper */}
          <View className="flex flex-row items-center">
            <View className="translate-y-0.5">
              <MapPin size={15} color={"#1f2937"} />
            </View>
            <Text className="text-xl text-gray-600 ml-1 mt-1">
              {weatherData
                ? `${weatherData.location.name}, ${weatherData.location.country}`
                : "India"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
