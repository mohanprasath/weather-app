import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import SearchCity from "./components/SearchCity";
import WeatherInformation from "./components/WeatherInformation";
import env from "./env";

const axios = require("axios");

export default function App() {
  const [cityName, setCityName] = useState("helsinki");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather?";
  const [weatherResponseData, setWeatherResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [temperature, setTemperature] = useState("");
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    load();
    return () => {};
  }, []);

  function load() {
    console.log(
      cityName,
      `${API_URL}q=${cityName}&units=${unitSystem}&appid=${env.WEATHER_API_KEY}`
    );

    axios
      .get(
        `${API_URL}q=${cityName}&units=${unitSystem}&appid=${env.WEATHER_API_KEY}`
      )
      .then(function (response) {
        // handle success
        setWeatherResponseData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setErrorMessage(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <View style={styles.container}>
      <SearchCity cityName={cityName} load={load} setCityName={setCityName} />
      <WeatherInformation
        style={styles.weatherInfo}
        weatherResponseData={weatherResponseData}
        unitSystem={unitSystem}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  weatherInfo: {
    padding: 10,
    justifyContent: "space-evenly",
  },
});
