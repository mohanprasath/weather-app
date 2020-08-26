/* eslint-disable react/style-prop-object */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// import NavigationBar from 'react-native-navbar';
import SearchCity from './components/SearchCity';
import WeatherInformation from './components/WeatherInformation';
import env from './env';

const axios = require('axios');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  weatherInfo: {
    padding: 10,
    justifyContent: 'space-evenly',
  },
});

export default function App() {
  const [cityName, setCityName] = useState('helsinki');
  const API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
  const [weatherResponseData, setWeatherResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [unitSystem, setUnitSystem] = useState('metric');
  // const APP_NAME = 'WEATHER INFO';
  console.disableYellowBox = true;

  function load() {
    if (cityName === '') {
      alert('Check the City name!');
    }
    // Fecthes the weather data from Open Weather Map API
    axios
      .get(
        `${API_URL}q=${cityName}&units=${unitSystem}&appid=${env.WEATHER_API_KEY}`,
      )
      .then((response) => {
        // handle success
        // console.log(response.data);
        setErrorMessage('Loading Weather Data...');
        setWeatherResponseData(response.data);
        setErrorMessage(null);
        setCityName('');
      })
      .catch((error) => {
        // handle error
        setWeatherResponseData(null);
        // alert('Check the City name!');
        setErrorMessage('Data Load Error!');
        setCityName('');
      });
  }

  useEffect(() => {
    load();
    // console.log('Inside useEffect');
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <SearchCity cityName={cityName} load={load} setCityName={setCityName} />
      <WeatherInformation
        style={styles.weatherInfo}
        weatherResponseData={weatherResponseData}
        unitSystem={unitSystem}
        setUnitSystem={setUnitSystem}
        errorMessage={errorMessage}
      />
      <StatusBar style="auto" />
    </View>
  );
}
