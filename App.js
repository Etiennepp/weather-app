import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import TemperatureLocation from "./components/TemperatureLocation";
import { REACT_APP_API_KEY } from "@env";
import Predictions from "./components/Predictions";

const image = "assets/icon.png";

export default function App() {
   const [weatherData, setWeatherData] = useState("");
   useEffect(() => {
      console.log("Starting app");
      // setInterval(() => {
      //    let lat = "45.764043";
      //    let lon = "4.835659";
      //    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`)
      //       .then((res) => res.json())
      //       .then((data) => {
      //          setWeatherData(data);
      //          console.log(data);
      //       });
      //    r;
      //    console.log("Weather data updated");
      // }, 4000);
   }, []);

   return (
      <View style={styles.container}>
         <ImageBackground
            source={require("./assets/day.png")}
            resizeMode={"cover"}
            style={{ width: "100%", position: "absolute", height: "100%" }}
         ></ImageBackground>
         <SafeAreaView style={{ width: "100%", position: "absolute", height: "100%" }}>
            {/* <TemperatureLocation current={weatherData != "" ? weatherData["main"]["temp"] : ""} /> */}
            <TemperatureLocation current={"310"} />
            <Predictions />
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
