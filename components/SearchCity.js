import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Dimensions, Keyboard } from "react-native";

export default function SearchCity({ cityName, load, setCityName }) {
  let screenWidth = Dimensions.get("window").width;
  console.ignoredYellowBox = ["Warning: Failed propType: SceneView"];

  function cityCheck(event) {
    Keyboard.dismiss();
    if (cityName) {
      load();
    } else {
      alert("Enter a City Name!.");
    }
  }

  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View>
        <TextInput
          style={{
            height: 35,
            width: screenWidth * 0.6,
            borderColor: "gray",
            borderWidth: 1,
            fontSize: 20,
            textAlign: "center",
          }}
          name="cityName"
          value={cityName}
          placeholder="City"
          onChangeText={(text) => setCityName(text)}
        />
      </View>
      <View>
        <Button
          style={{
            height: 40,
            width: screenWidth * 0.3,
            borderColor: "gray",
            borderWidth: 1,
          }}
          title="Search"
          onPress={cityCheck}
          text="Search"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
