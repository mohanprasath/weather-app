import React from 'react';
import { View, Text } from 'react-native';

export default function DisplayTemperature({
  styles, text, temperature, unitSystem,
}) {
  if (text !== '' && text !== undefined) {
    return (
      <View>
        <Text style={styles}>
          {temperature
            ? `${text}${temperature}º${
              unitSystem === 'metric' ? 'C' : 'F'
            }`
            : ''}
        </Text>
      </View>
    );
  }else{
  return (
    <View>
      <Text style={styles}>
        {temperature
          ? `${temperature}º${
            unitSystem === 'metric' ? 'C' : 'F'
          }`
          : ''}
      </Text>
    </View>
  );
}
}