import { Button, StyleSheet, Text, Alert, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';



const Home = () => {

  const [todos, setTodos] = useState([])
  useEffect(() => {
    const getTodos = async() => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/")
        setTodos(res.data)
        console.log(todos);
      } catch (error) {
        console.log(error);
        Alert.alert(
          'Network Error!',
          'Could not connect to server',
          [
            {text: 'Yes', onPress: () => console.log('Yes button clicked')},
            {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
          ],
          { 
            cancelable: true 
          }
        );
      }
    }
    getTodos()
  }, []);

  return (
    <View style={styles.homeContainer}>
      <FlatList
      data={todos}
      renderItem={({item})=> {
        return (
          <View style={styles.todoContainer}>
          <Text style={{fontSize: 22}}>{item.title}</Text>
          <Text style={{fontSize:20}}>{item.description}</Text>
          <Button
          title='Hello'
          onPress= {() => console.log("Hello")}
          
          />
          </View>
        )
      }}     
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  homeContainer: {
    padding: 30,

  },

  todoContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    borderWidth: 1,
    marginBottom: 20,

  }
})

