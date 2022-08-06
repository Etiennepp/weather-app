import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PredictionHour from "./PredictionHour";

const convertToCelsius = function (temp) {
   return Math.round((temp - 273.5) * 10) / 10;
};

const Predictions = (props) => {
   return (
      <ScrollView horizontal style={styles.container}>
         <PredictionHour></PredictionHour>
         <PredictionHour></PredictionHour>
         <PredictionHour></PredictionHour>
         <PredictionHour></PredictionHour>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      height: 180,
      width: "100%",
      position: "absolute",
      bottom: 0,
      backgroundColor: "rgba(0.1,.1,1,.5)",
      zIndex: 100,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flex: 1,
   },
});

export default Predictions;
