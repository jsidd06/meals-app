import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverViewScreen from "./src/screens/MealsOverViewScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
