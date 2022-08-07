import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import TemperatureLocation from "./components/TemperatureLocation";
import { REACT_APP_API_KEY } from "@env";
import Predictions from "./components/Predictions";

const image = "assets/icon.png";

export default function App() {
   const [currentTemp, setCurrentTemp] = useState("");
   const [minTemp, setMinTemp] = useState("");
   const [maxTemp, setMaxTemp] = useState("");
   const [icon, setIcon] = useState("");
   const [forecastData, setForecastData] = useState([]);
   const [backgroundImage, setBackgroundImage] = useState("day");
   var images = {
      day: require("./assets/day.png"),
      night: require("./assets/night.png"),
      sunset: require("./assets/sunset.png"),
      sunrise: require("./assets/sunrise.png"),
   };

   useEffect(() => {
      console.log("Starting app");
      setInterval(() => {
         // Fetch current weather data
         let lat = "45.764043";
         let lon = "4.835659";
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
               setCurrentTemp(data["main"]["temp"]);
               setMinTemp(data["main"]["temp_min"]);
               setMaxTemp(data["main"]["temp_max"]);
               setIcon(data["weather"][0]["icon"]);

               // Update background image
               var currentDate = new Date();
               var currentHour = currentDate.getHours();
               var sunRise = new Date(data["sys"]["sunrise"] * 1000);
               var sunRiseHour = sunRise.getHours();
               var sunSet = new Date(data["sys"]["sunset"] * 1000);
               var sunSetHour = sunSet.getHours();

               if (currentHour < sunRiseHour || currentHour > sunSetHour) setBackgroundImage("night");
               else if (currentHour > sunRiseHour && currentHour < sunSetHour) setBackgroundImage("day");
               else if (currentHour == sunSetHour) setBackgroundImage("sunset");
               else if (currentHour == sunRiseHour) setBackgroundImage("sunrise");
            });

         // Fetch forecast data
         fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
               setForecastData(data["list"]);
            });
      }, 4000);
   }, []);

   return (
      <View style={styles.container}>
         <ImageBackground
            source={images[backgroundImage]}
            resizeMode={"cover"}
            style={{ width: "100%", position: "absolute", height: "100%" }}
         ></ImageBackground>
         <SafeAreaView style={{ width: "100%", position: "absolute", height: "100%" }}>
            <TemperatureLocation current={currentTemp} icon={icon} min={minTemp} max={maxTemp} />
            <Predictions forecast={forecastData} />
         </SafeAreaView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
