# Weather App - React Native application Dev Cycle

## Cycle 1

1. Started at 6:02 PM 10 Aug 2020
2. Set up workspace and required node and expo FS
3. App should contain a text view of "Hello User"
4. Add the weather app secret keys to the locale
5. Planned duration - 30 Min

### Notes - cycle 1

- .gitignore
- npm install expo-cli --global
- expo init
- choosen blank template
- copy the api secret to local env file
- npm start

### Report - cycle 1

- ALL DONE

## Cycle 2

1. Make an api call and display the temperature with unit info on the app
2. Choose by default the city to be Helsinki
3. Log other info received from the api response to the console
4. Planned duration - 45 min

### Notes - cycle 2

- axios vs. fetch - axios is cleaner to use
- npm install axios
- make a GET request with cityName and API_KEY
- keeping secret key in env and importing it using the dotenv lib failed - BUG

### Report - cycle 2

- env key method has to be figured out
- PARTIALLY DONE
