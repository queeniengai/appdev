import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackHome from './HomeScreen';
import StackRecipe from './RecipeScreen';

const Stack = createNativeStackNavigator();

export default function HomeScreenNav() {
  return (
    <Stack.Navigator
      initialRouteName='StackHome'>
      <Stack.Screen
        name="Home"
        component={StackHome}        
      />
      <Stack.Screen
        name="Recipe"
        component={StackRecipe}
      />
    </Stack.Navigator>
  );
}
