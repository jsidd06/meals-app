import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { FavoriteContext } from "../store/context/Favorite-context";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const isMealsFavorite = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (isMealsFavorite.length === 0) {
    return (
      <View style={styles.rootCtn}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={isMealsFavorite} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
    color: "#fff",
  },
});
