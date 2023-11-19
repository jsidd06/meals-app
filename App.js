import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealsOverViewScreen from "./src/screens/MealsOverViewScreen";
import MealDetailsScreen from "./src/screens/MealDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            cardStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            options={{
              title: "All Categories",
            }}
            name="Categories"
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
