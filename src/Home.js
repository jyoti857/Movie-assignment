import * as React from 'react';
import { View, Button, StyleSheet, ScrollView, TextInput } from "react-native";
import CustomCard from './Components/Card';

const {useState, useEffect} = React
const url = 'http://www.omdbapi.com/?apikey=b9bd48a6&s={Query}';
function Home({navigation}){
  const [data, setData] = useState([]);
  const [dataC, setDataC] = useState([]);
  const [flag, setFlag] = useState(false);
  const [searchValue, setSearchValue] = useState()
  useEffect(() => {
    const fetchMovies = async() => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result?.Search)
    }
    fetchMovies();
  }, []);
  const handleSearch = (data, elem = '') => {
    const dataClone = [...data]
    const result = dataClone && dataClone.length>0 && dataClone.filter(d => d.Title.toLowerCase().includes(elem.toLowerCase()))
    const s =  result.length > 0 ? result : [];
    setDataC(s)
    if(searchValue === '' || searchValue === undefined ){setDataC([])}
  }
  
  const handleOnTextChange = (text) => {
    setSearchValue(text)
    setFlag(!flag)
  }
  useEffect(() => {
    handleSearch(data, searchValue)
  }, [flag])
  return (
    <View style  = {styles.container}>
      <Button 
        title="Go to Search 2"
        onPress={() => navigation.navigate('Details')}
      />
      <View style ={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TextInput  
          style = {styles.input} 
          placeholder='Search here by movie title' 
          value={searchValue}
          label="Email"
          onChangeText={handleOnTextChange}
        />
        
      </View>
      <ScrollView>
      { 
        // contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}} 
         !searchValue ?  data && data.length > 0 && data.map((d) => <ScrollView 
         contentContainerStyle={{ backgroundColor: 'red', flexWrap: 'wrap', width: 300, display: 'flex',  flexDirection: 'row'}}
         key = {d.imdbID} horizontal showsHorizontalScrollIndicator = {false} >
           {/* <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}} horizontal showsHorizontalScrollIndicator = {false}> */}
            <CustomCard
              style={styles.card} 
              uri = {d.Poster} movieTitle = {d.Title} 
              onPress = {() => navigation.navigate('Details', {uri: d.Poster, movieTitle: d.Title, year: d.Year, type: d.Type})}/> 
          </ScrollView>) : dataC && dataC.length > 0 && dataC.map((dc ) => <View key = {dc.imdbID} >
            <CustomCard uri = {dc.Poster} movieTitle = {dc.Title} 
            onPress = {() => navigation.navigate('Details', {uri: dc.Poster, movieTitle: dc.Title,  year: dc.Year, type: dc.Type})}/> 
          </View> )
        }
      </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 160, 
    marginButtom: 100,
    width: 600,
    alignSelf: 'center',
    flex:1,
    backgroundColor: 'white'
  },
  input: {
    marginTop: 30,
    height: 30,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 4,
  },
  button: {
    width: 200,
    alignContent: 'center'
  },
  card: {
    width: 200,
    display: 'flex',
    flexDirection: 'row'
  }
})

export default Home;