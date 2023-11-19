import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootCtn}>
      <Image source={{ uri: selectMeal.imageUrl }} style={styles.image} />
      <Text style={styles.heading}>{selectMeal.title}</Text>
      <MealDetail
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.mealDetailText}
      />
      <View>
        <View>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  heading: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
  },
  mealDetailText: {
    color: "#fff",
  },
});
