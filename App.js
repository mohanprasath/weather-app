import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const axios = require("axios");

export default function App() {
  const [cityName, setCityName] = useState("helsinki");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather?";
  const api_key = "";
  const [temperature, setTemperature] = useState("");
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    load();
    return () => {};
  }, []);

  function load() {
    axios
      .get(`${API_URL}q=${cityName}&units=${unitSystem}&appid=${api_key}`)
      .then(function (response) {
        // handle success
        const jsonData = response.data;
        console.log(jsonData, jsonData.main.temp);
        setTemperature(jsonData.main.temp);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <View style={styles.container}>
      <Text>
        Hello User, the temperature is {temperature}º
        {unitSystem === "metric" ? "C" : "F"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
