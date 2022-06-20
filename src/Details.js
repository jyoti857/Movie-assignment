import * as React from 'react';
import { View, Button, StyleSheet, ScrollView, TextInput } from "react-native";
import CustomCard from './Components/Card';

export default function Details({route}){
  const {uri, movieTitle, year, type} = route.params;
  return(
    <View>
      <CustomCard 
        uri={uri} 
        movieTitle={movieTitle} 
        year = {year}
        type = {type}
        style = {styles.card}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 400
  }
})