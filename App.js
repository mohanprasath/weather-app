import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import SearchCity from "./components/SearchCity";
import WeatherInformation from "./components/WeatherInformation";
import env from "./env";
import NavigationBar from "react-native-navbar";

const axios = require("axios");

export default function App() {
  const [cityName, setCityName] = useState("helsinki");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather?";
  const [weatherResponseData, setWeatherResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [temperature, setTemperature] = useState("");
  const [unitSystem, setUnitSystem] = useState("metric");
  const APP_NAME = "WEATHER INFO";

  console.disableYellowBox = true;

  useEffect(() => {
    load();
    return () => {};
  }, []);

  function load() {
    // Fecthes the weather data from Open Weather Map API 
    axios
      .get(
        `${API_URL}q=${cityName}&units=${unitSystem}&appid=${env.WEATHER_API_KEY}`
      )
      .then(function (response) {
        // handle success
        setErrorMessage("Loading Weather Data...");
        setWeatherResponseData(response.data);
        setErrorMessage(null);
        setCityName("");
      })
      .catch(function (error) {
        // handle error
        setWeatherResponseData(null);
        console.log(error);
        setErrorMessage(error);
      });
  }

  return (
    <View style={styles.container}>
      <NavigationBar title={APP_NAME} />
      <SearchCity cityName={cityName} load={load} setCityName={setCityName} />
      <WeatherInformation
        style={styles.weatherInfo}
        weatherResponseData={weatherResponseData}
        unitSystem={unitSystem}
        errorMessage={errorMessage}
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
