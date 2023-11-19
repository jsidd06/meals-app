import { FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = ({ route, navigation }) => {
  const cardId = route.params.cardId;

  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(cardId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cardId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cardId, navigation]);

  function renderItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({});
