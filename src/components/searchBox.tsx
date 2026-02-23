import { Dispatch, useState } from "react";
import getWeather from "../utils/getWeather";
import { Search, X } from "lucide-react-native";
import { WeatherTypes } from "../utils/weather.types";
import { Pressable, TextInput, View } from "react-native";

export default function SearchBox({
  setWeatherData,
}: {
  setWeatherData: Dispatch<React.SetStateAction<WeatherTypes | undefined>>;
}) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = async () => {
    const data = await getWeather(searchInput);
    if (!data) return;
    setWeatherData(data);
    setSearchInput("");
  };

  return (
    <>
      <View className="bg-white flex flex-row items-center rounded-3xl px-3 py-0.5 gap-x-2">
        <TextInput
          onSubmitEditing={handleSearch}
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          maxLength={30}
          placeholder="Search for places..."
          className="text-lg flex-1 text-gray-800"
        />
        <Pressable onPress={handleSearch} className="bg-gray-200 rounded-full p-2">
          <Search size={22} color={"#1f2937"} />
        </Pressable>
        <Pressable onPress={() => setSearchInput("")} className="bg-gray-200 rounded-full p-1.5">
          <X size={24} color={"#1f2937"} />
        </Pressable>
      </View>
    </>
  );
}
