import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const DisplayTemperature = ({
  styles = '', text = '', temperature = 0, unitSystem = '',
}) => {
  if (text !== '' && text !== undefined) {
    return (
      <View>
        <Text style={styles}>
          {temperature
            ? `${text}${temperature}º${unitSystem === 'metric' ? 'C' : 'F'}`
            : ''}
        </Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles}>
        {temperature
          ? `${temperature}º${unitSystem === 'metric' ? 'C' : 'F'}`
          : ''}
      </Text>
    </View>
  );
};

DisplayTemperature.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string,
  temperature: PropTypes.number,
  unitSystem: PropTypes.string,
};

export default DisplayTemperature;
