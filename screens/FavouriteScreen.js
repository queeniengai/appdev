import { View, StyleSheet, TextInput } from 'react-native';
import { Text, } from 'react-native-elements';

export default function FavouriteScreen() {
  return (
      <View style={styles.container}>
        <Text>Login to see your favourite items!</Text>
      </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 30, 
    backgroundColor: '#ffffff',
  },

  heading: {
    fontSize: 30,
    color: '#F79292',
  },
  
});
