import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect, useState } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetails/SubTitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/Favorite-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  const isMealFavorite = favoriteMealsCtx.ids.includes(mealId);

  const pressedHandler = () => {
    if (isMealFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isMealFavorite ? "star" : "star-outline"}
            color="#fff"
            onPress={pressedHandler}
          />
        );
      },
    });
  }, [navigation, pressedHandler]);

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
      <View style={styles.outerListCtn}>
        <View style={styles.innerListCtn}>
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
  outerListCtn: {
    alignItems: "center",
  },
  innerListCtn: {
    width: "80%",
  },
});
