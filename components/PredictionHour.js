import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const convertToCelsius = function (temp) {
   return Math.round(temp - 273.5);
};

const PredictionHour = (props) => {
   const currentDatetime = new Date();
   const forecastDateTime = new Date(props.timestamp * 1000);
   var dateTimeOptions = { month: "numeric", day: "numeric" };

   return (
      <View style={styles.container}>
         <Text style={styles.hour}>{forecastDateTime.getHours()} h</Text>
         <Text style={styles.context}>
            {currentDatetime.getDate() == forecastDateTime.getDate()
               ? "Today"
               : forecastDateTime.toLocaleDateString("fr-FR", dateTimeOptions)}
         </Text>
         <Image
            style={styles.icon}
            source={{
               uri: "http://openweathermap.org/img/wn/" + props.icon + "@4x.png",
            }}
         />
         <Text style={styles.temperature}>{convertToCelsius(props.temp)}°</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: 150,
      marginHorizontal: 0,
      marginVertical: 10,
      zIndex: 101,
      alignItems: "center",
   },
   icon: {
      height: 80,
      width: 80,
      top: -10,
   },
   hour: {
      fontSize: 30,
      color: "#FFF",
   },
   temperature: {
      fontSize: 20,
      color: "#FFF",
      top: -15,
      left: 3,
   },
   context: {
      fontSize: 15,
      color: "#FFF",
   },
});

export default PredictionHour;
