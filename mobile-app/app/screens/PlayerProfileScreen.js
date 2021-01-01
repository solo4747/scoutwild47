import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";

function PlayerProfileScreen() {
  return (
    <Screen>
      <View>
        <AppText style={styles.text}>Profile</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
  text: {
    color: "white",
  },
});

export default PlayerProfileScreen;
