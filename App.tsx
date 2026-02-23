import "./src/global.css";
import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./src/navigation/rootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle={"dark-content"} />
        <RootNavigator />
      </SafeAreaProvider>
    </>
  );
}
