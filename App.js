import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverViewScreen from "./src/screens/MealsOverViewScreen";
import MealDetailsScreen from "./src/screens/MealDetails";
import FavoriteScreen from "./src/screens/FavoriteScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name="Categories"
        options={{
          title: "All Categories",
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen component={FavoriteScreen} name="FavoriteScreen" />
    </Drawer.Navigator>
  );
}

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
              headerShown: false,
            }}
            name="Drawer"
            component={DrawerNavigator}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
