import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import {Button} from 'react-native-paper'
import CustomCard from './Components/Card';

export default function Details({ navigation, route}){
  const {uri, movieTitle, year, type} = route.params;
  const onBackPress = () => {
    navigation.navigate("Home");
  }
  return(
    <View>
      <Button
        style = {{marginTop: 40, marginLeft: 10, width: 100 }}
        onPress={() => navigation.navigate('Home')}
      >Back</Button>
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