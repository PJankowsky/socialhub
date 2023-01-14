import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';


const UpdateTodo = ({navigation, route}) => {


    
  const [title, setTitle] = useState(route.params.title)


  const [description, setDescription] = useState(route.params.description)


  console.log(route.params.title);

  const UpdateTodo = async(id) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/todos/${route.params.pk}`,{
        title: title,
        description: description
      })
      navigation.goBack()
    } catch (error) {
      console.log(error);
    }
  }


return (
  <View style={styles.updateContainer}>

    <TextInput
    style={styles.input}
    onChangeText={val => setTitle(val)}
    value={title}
    />
    <Text style = {styles.wording}>Description</Text>
    <TextInput
    style={styles.input}
    onChangeText={val => setDescription(val)}
    value={description}
    />
  <Button
    title='Update Todo'
    onPress={UpdateTodo}
  />
  </View>
  )
}


export default UpdateTodo

const styles = StyleSheet.create({
    updateContainer: {
        padding: 30,
    
      },
    input: {
    padding: 8,
    marginVertical: 10,
    borderWidth: 1,
    height: 30,
    width: "100%",
},
    })