import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const convertToCelsius = function (temp) {
   return Math.round(temp - 273.5);
};

const PredictionHour = (props) => {
   return (
      <View style={styles.container}>
         <Text style={styles.hour}>22 h</Text>
         <Image
            style={styles.icon}
            source={{
               uri: "http://openweathermap.org/img/wn/10d@4x.png",
            }}
         />
         <Text style={styles.temperature}>25°</Text>
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
   },
   hour: {
      fontSize: 30,
      color: "#FFF",
   },
   temperature: {
      fontSize: 20,
      color: "#FFF",
   },
});

export default PredictionHour;
