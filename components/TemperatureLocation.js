import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const convertToCelsius = function (temp) {
   return Math.round(temp - 273.5);
};

const TemperatureLocation = (props) => {
   return (
      <View style={styles.weather}>
         <View style={styles.current}>
            <Text style={styles.temperature}>{props.current != "" ? convertToCelsius(props.current) : "--"}°</Text>
            <Image
               style={styles.icon}
               source={{
                  uri: "http://openweathermap.org/img/wn/" + props.icon + "@4x.png",
               }}
            />
         </View>
         <Text style={styles.minmax}>
            Min {props.min != "" ? convertToCelsius(props.min) : "--"}° Max{" "}
            {props.max != "" ? convertToCelsius(props.max) : "--"}°
         </Text>
         <Text style={styles.location}>Lyon</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   weather: {
      top: 30,
      left: 30,
   },
   current: {
      flexDirection: "row",
      flexWrap: "wrap",
   },
   temperature: {
      fontWeight: "200",
      fontSize: 120,
      color: "white",
      height: 130,
   },
   location: {
      fontSize: 40,
      color: "white",
      left: 5,
   },
   minmax: {
      fontSize: 20,
      color: "white",
      left: 5,
   },
   icon: {
      height: 120,
      width: 120,
   },
});

export default TemperatureLocation;
