import React, { useEffect, useState } from "react";
import {View, Text, FlatList, SafeAreaView} from "react-native";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('http://192.168.104.79:300/products/')
          .then(response => response.json())
          .then(data => setPokemons(data));
      }, []);
    
      return (
        <FlatList
          data={pokemons}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => 
          <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                </View>       
        }
        />
      );
      
}    

export default PokemonList;

