import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

export default function ProfileScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hello,</Text>
        <Text style={styles.paragraph}>login to your profile</Text>
        <Avatar 
          style={styles.profileImg}
          rounded
          source={require('../assets/recipe-imgs/chocolate-cupcakes.jpg')}
        />
        <Text>Username</Text>
        <TextInput
            style={styles.input}
            placeholder="Queenie"
        />
        <Text>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="*****"
        />
        <Button
          buttonStyle={{
            backgroundColor: '#F79292',
            borderRadius: 20,
            height: 45,
            margin: 12,
            padding: 10,
            borderRadius: 50,
          }}
          title="login"
        />
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

  paragraph: {
    fontSize: 20,
    marginBottom: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  
});