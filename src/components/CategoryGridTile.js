import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
