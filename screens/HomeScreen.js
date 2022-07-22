import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Text, Avatar } from 'react-native-elements';

// import MyListItem from '../components/MyListItem';

export default function HomeScreen() {

  // add states for fetch process
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [recipeResult, setRecipeResult] = useState([]);

  // add useEffect for the fetch process
  useEffect(()=>{
    fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
      .then(res=>res.json())
      .then(
        (result)=>{
          // successful load
          setIsLoaded(true);
          setRecipeResult(result.meals);
        },
        (error) => {
          // handle errors here
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Hello!</Text>
        {displayRecipe(error, isLoaded, recipeResult)}
    </View>
  );
}

function displayRecipe(error, isLoaded, recipeResult ){
  const renderItem = ({ item }) => (
    <ListItem key={item.idMeal}>
        <Avatar source={{ uri: item.strMealThumb }} />
        <ListItem.Content>
          <ListItem.Title>{item.strMeal}</ListItem.Title>
        </ListItem.Content>
      <Button
        icon={{
          name: 'caret-forward',
          type: 'ionicon',
          size: 15,
        }}
        iconPosition='right'
        buttonStyle={{
          backgroundColor: '#F79292',
          borderRadius: 20,
        }
        }
      />
    </ListItem>
  );

  if(error){
    // show error message
    return(
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  else if(!isLoaded){
    // show Activity Indicator
    return(
      <View>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" color="#FFB185"/>
      </View>
    );
  }
  else if(recipeResult.meals === undefined){
    // no recipes
    return(
      <View>
        <Text>No records for your search</Text>
      </View>
    );

  }
  else {
    // show data in flatlist
    return(
      <FlatList
      data={recipeResult}
      renderItem={renderItem}
      keyExtractor={item => item.idMeal}
      />
    );
  }
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },

  container: {
    flex: 1,
    padding: 30, 
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 30,
    color: '#F79292',
  }
  
});
