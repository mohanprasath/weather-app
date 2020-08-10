import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function SearchCity({ cityName, load, setCityName }) {
  return (
    <View
      style={{
        paddingTop: 20,
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View style={{ flex: 1 }}>
        <TextInput
          style={{ height: 35, borderColor: "gray", borderWidth: 1 }}
          name="cityName"
          value={cityName}
          placeholder="Enter the city name here"
          onChangeText={(text) => setCityName(text)}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          title="Search"
          onPress={load}
          text="Search"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
