import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokemonList from './src/screens/PokemonList';
import LoginForm from './src/screens/LoginForm';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStacks from './src/navigation/NavigationStacks';

export default function App() {
  // return <PokemonList /> 
  return (
    /*<View>
      <LoginForm name="Alberto" surname="Hernández Akkari"/>
      <LoginForm name="PEPE" surname="PEPE PEPE"/>
      <LoginForm name="LUIS" surname="LUIS LUIS"/>
      <LoginForm name="CARLA" surname="CARLA CARLA"/>
    </View>*/
    <NavigationContainer>
      <NavigationStacks />
    </NavigationContainer>
  );
      
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
