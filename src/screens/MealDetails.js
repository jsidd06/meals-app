import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image
        source={{ uri: selectMeal.imageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text>{selectMeal.title}</Text>
      <MealDetail
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>Steps</Text>
      {selectMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
