# weather-app

This react native application is designed to find the weather of a city using API calls.
Application is published in Expo <https://expo.io/@mohanprasath/weather-app>

## Software Requirements

Node JS
React
React Native
Expo

## Development Process

I followed Iteration based developments. Each iteration is planned with a set of goals, developed, tested and committed. All iteration information is stored in the Plan markdown file.

## Setup

Requires Node.js 20+ (Expo SDK 57).

1. Create a `.env` file in the project root (it is git-ignored) with your OpenWeatherMap key:

   ```
   EXPO_PUBLIC_WEATHER_API_KEY=your-openweathermap-key
   ```

   Note: `EXPO_PUBLIC_*` values are inlined into the app bundle, so this key is visible to anyone who has the app.
2. `npm install`
3. `npm run web` (or `npm start` for Expo Go)
