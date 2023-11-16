import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderItem(itemData) {
  return <CategoryGridTile title={itemData.item.title} />;
}

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
