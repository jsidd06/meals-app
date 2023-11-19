import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.mealsCtn}>
      <Text style={styles.mealDetails}>{duration}m</Text>
      <Text style={styles.mealDetails}>{complexity.toUpperCase()}</Text>
      <Text style={styles.mealDetails}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  mealsCtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  mealDetails: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginHorizontal: 6,
  },
});
