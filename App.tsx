import "./src/global.css";
import React, { useEffect } from "react";
import { StatusBar, Text } from "react-native";
import RNBootSplash from "react-native-bootsplash";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle={"dark-content"} />
        <Text>Tiger Insights</Text>
      </SafeAreaProvider>
    </>
  );
}
