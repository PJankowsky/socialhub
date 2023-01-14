import { Button, StyleSheet, Text, Alert, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Ionicons, AntDesign } from '@expo/vector-icons';


const Home = ({navigation}) => {

  
  
  const [todos, setTodos] = useState([])
  
  const getTodos = async() => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/todos/")
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
  useEffect(() => {
    
    getTodos()
  }, []);

  useEffect(() => {
     const focus = navigation.addListener('focus', () => {
        getTodos();
     })
     return focus
  }, [navigation]);

  const delete_todo = async(id) => {
    try {
      const res = await axios.delete(`http://127.0.0.1:8000/todos/delete/${id}`)
      getTodos()
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <View style={styles.homeContainer}>
      <TouchableOpacity style={styles.addButton}
      onPress={() => navigation.navigate("AddTodo")}>
      <Ionicons name="add-circle" size={75} color="tomato"/>
      </TouchableOpacity>
      
      {!(todos.length > 0) && <View style={styles.noTodos}>
        <Text>Tap </Text>
        <Ionicons name="add-circle" size={20} color="tomato"/>
        <Text> to add new todo</Text>
        </View>}
      

      {todos.length > 0 && <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({item})=> {
        return (
          <View style={styles.todoContainer}>
            <View>
              <Text style={{fontSize: 22}}>{item.title}</Text>
              <Text style={{fontSize:20}}>{item.description}</Text>
            </View>
          <View style= {styles.actionBtn}>
            <TouchableOpacity
              onPress = {() => delete_todo(item.id)}>
              <Ionicons name="md-trash-bin-outline" size={24} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("UpdateTodo", {
              title: item.title,
              description: item.description,
              pk: item.id
            })}>
              <AntDesign name="edit" size={24} color="orange"/>
            </TouchableOpacity>
          </View>
          </View>
        )
      }}     
      />}





    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  homeContainer: {
    minHeight:"100%",
    paddingHorizontal: 30,
  },

  todoContainer: {
    marginTop: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    borderWidth: 1,
    justifyContent: "space-between"
  },
  actionBtn: {
    height: 70,
    justifyContent: "space-between",

  },
  addButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    zIndex: 999,
  },
  noTodos: {
    minHeight: "100%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",

  }
})

