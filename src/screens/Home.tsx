import { useState } from "react";
import SearchBox from "../components/searchBox";
import { MapPin, Sun } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  const [weatherData, setWeatherData] = useState({
    tempInC: "12",
    tempInF: "24",
    dayTime: "",
    status: "Mostly Cloudy",
    location: "India",
  });

  return (
    <>
      <ScrollView className="flex-1 p-5">
        {/* Search Location */}
        <SearchBox setWeatherData={setWeatherData} />
        {/* Wrapper */}
        <View className="flex items-center py-8">
          {/* Weather Icon */}
          <Sun size={110} color={"#1f2937"} />
          {/* Temperature Wrapper */}
          <View className="flex flex-row py-4">
            <Text className="text-8xl text-gray-800">{weatherData.tempInC}</Text>
            <Text className="text-7xl translate-y-1 font-normal text-gray-800">&#176;</Text>
            <Text className="text-4xl translate-y-1.5 font-medium text-gray-800">C</Text>
          </View>
          {/* Day & Time */}
          <Text className="text-xl text-gray-600">Monday, 12:00</Text>
          {/* Weather Status */}
          <Text className="text-xl text-gray-600 mt-1">{weatherData.status}</Text>
          {/* Location Wrapper */}
          <View className="flex flex-row items-center">
            <View className="translate-y-0.5">
              <MapPin size={15} color={"#1f2937"} />
            </View>
            <Text className="text-xl text-gray-600 ml-1 mt-1">{weatherData.location}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
