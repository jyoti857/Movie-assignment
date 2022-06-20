import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';

const {useState}  = React
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const CustomSearch = ({value, setValue}) => {
 
  const onSearchHandle = () => {
    return <TextInput  style = {styles.input} placeholder='Search here by movie title' onChangeText={ setValue} value={value}/>
  }
return(
    <View>
      <Text>spda;lad</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    height: 30,
    width: 935,
    margin: 12,
    borderWidth: 1,
    padding: 4,
  },
});
export default CustomSearch;