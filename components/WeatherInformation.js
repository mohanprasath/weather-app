/* eslint-disable camelcase */
import React from 'react';
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  cityText: {
    fontSize: 40,
    paddingTop: 30,
    textAlign: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  otherTextContainer: {
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  padTopContainer: {
    paddingTop: 15,
  },
  moreInfoContainer: {
    fontSize: 16,
    textAlign: 'center',
  },
});

function WeatherInformation({ weatherResponseData, unitSystem, errorMessage }) {
  if (weatherResponseData) {
    const {
      main: { temp, feels_like, humidity },
      sys: { country },
      weather: [details],
      wind: { speed },
      name,
    } = weatherResponseData;
    const { icon, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    // console.log(iconUrl);
    return (
      <View>
        <Text style={styles.cityText}>{`${name}, ${country}`}</Text>
        <View style={{ flexDirection: 'column' }}>
          <Image style={styles.imageContainer} source={{ uri: iconUrl }} />
          <Text style={styles.otherTextContainer}>
            {temp}
            º
            {unitSystem === 'metric' ? 'C' : 'F'}
          </Text>
          <Text style={styles.otherTextContainer}>{description}</Text>
          <View style={styles.padTopContainer}>
            <Text style={styles.moreInfoContainer}>
              {feels_like
                ? `Feels Like ${feels_like}º${
                  unitSystem === 'metric' ? 'C' : 'F'
                }`
                : ''}
            </Text>
            <Text style={styles.moreInfoContainer}>
              {humidity ? `Humidity ${humidity}` : ''}
            </Text>
            <Text style={styles.moreInfoContainer}>
              {speed
                ? `Wind Speed ${speed} ${
                  unitSystem === 'metric' ? 'm/s' : 'mph'
                }`
                : ''}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  if (errorMessage) {
    return <View />;
  }
  return <View />;
}

WeatherInformation.propTypes = {
  weatherResponseData: PropTypes.string,
  unitSystem: PropTypes.string,
  errorMessage: PropTypes.string,
};

WeatherInformation.defaultProps = {
  weatherResponseData: null,
  unitSystem: '',
  errorMessage: '',
};

export default WeatherInformation;
