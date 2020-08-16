import React from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  searchCityInput: {
    height: 35,
    width: screenWidth * 0.6,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  searchButton: {
    height: 40,
    width: screenWidth * 0.3,
    borderColor: 'gray',
    borderWidth: 1,
  },
  searchView: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default function SearchCity({
  cityName, load, setCityName,
}) {
  // console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

  const cityCheck = () => {
    Keyboard.dismiss();
    if (cityName) {
      load();
    } else {
      alert('Enter a City Name!.');
    }
  };

  return (
    <View style={styles.searchView}>
      <View>
        <TextInput
          style={styles.searchCityInput}
          name="cityName"
          value={cityName}
          placeholder="City"
          onChangeText={setCityName}
        />
      </View>
      <View>
        <Button
          style={styles.searchButton}
          title="Search"
          onPress={cityCheck}
          text="Search"
        />
      </View>
    </View>
  );
}
