import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
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
      <View style ={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <TextInput  
          style = {styles.input} 
          placeholder='Search here by movie title' 
          value={searchValue}
          label="Email"
          onChangeText={handleOnTextChange}
        />
        
      </View>
      <ScrollView contentContainerStyle = {{flexDirection: 'row', flexWrap: 'wrap', width: 440}} >
      { 
         !searchValue ?  data && data.length > 0 && data.map((d) => <ScrollView 
         contentContainerStyle={{ backgroundColor: 'violet', flexWrap: 'wrap', width: 210, margin: 3,  display: 'flex',  flexDirection: 'row'}}
         key = {d.imdbID} horizontal showsHorizontalScrollIndicator = {false} >
            <CustomCard
              style={styles.card} 
              uri = {d.Poster} movieTitle = {d.Title} 
              onPress = {() => navigation.navigate('Details', {uri: d.Poster, movieTitle: d.Title, year: d.Year, type: d.Type})}/> 
          </ScrollView>) : dataC && dataC.length > 0 && dataC.map((dc ) => <ScrollView 
          key = {dc.imdbID}
          contentContainerStyle={{ backgroundColor: 'violet', flexWrap: 'wrap', width: 210, margin: 3,  display: 'flex',  flexDirection: 'row'}}
          horizontal showsHorizontalScrollIndicator = {false}
          >
            <CustomCard uri = {dc.Poster} movieTitle = {dc.Title}   style={styles.card} 
            onPress = {() => navigation.navigate('Details', {uri: dc.Poster, movieTitle: dc.Title,  year: dc.Year, type: dc.Type})}/> 
          </ScrollView> )
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
    width: 400,
    margin: 12,
    borderRadius: 12,
    borderWidth: 1,
    paddingLeft: 4,
    color: 'red'
  },
  button: {
    width: 200,
    alignContent: 'center'
  },
  card: {
    flex: 1,
    width: 300,
    borderRadius: 20
  }
})

export default Home;