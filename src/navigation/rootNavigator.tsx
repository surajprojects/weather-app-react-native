import Home from "../screens/Home";
import BootSplash from "react-native-bootsplash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer onReady={async () => await BootSplash.hide({ fade: true })}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
