import React from "react";
import { View, Text, Image } from "react-native";

export default function WeatherInformation({
  weatherResponseData,
  unitSystem,
}) {
  if (weatherResponseData) {
    const {
      main: { temp },
      weather: [details],
      name,
    } = weatherResponseData;
    const { icon, main, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    console.log(iconUrl);
    return (
      <View>
        <Text>{name}</Text>
        <View style={{ flexDirection: "column" }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: iconUrl }}
          />
          <Text>
            {temp}º{unitSystem === "metric" ? "C" : "F"}
          </Text>
          <Text>{description}</Text>
          <Text>{main}</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
}
