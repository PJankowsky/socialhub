import { StyleSheet, Text, View, TextInput, Button, BackHandler } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const AddTodo = ({navigation}) => {

  const [title, setTitle] = useState()

  const [description, setDescription] = useState()

  const createTodo = async() => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/todos/create/', {
        title: title,
        description: description
      })
      console.log(res);
      navigation.goBack()
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <View style= {styles.main}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:20 }}>
    <Text style = {styles.wording_one}>Title</Text>

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
      title='Add Todo'
      onPress={createTodo}
      />
    </View>
    </View>
  )
}

export default AddTodo

const styles = StyleSheet.create({

  input: {
    flex: .1,
    padding: 8,
    marginVertical: 10,
    borderWidth: 1,
    height: 30,
    width: "100%",
},
main: {
    flex: 1,
    paddingBottom: 100,
    marginTop: 50
},
wording: {
    justifyContent: "center",
    flex: .2,
    paddingHorizontal: 40,
    paddingTop: 100,
    alignItems: "baseline",
    fontSize: 40,
    paddingTop: 0,
},
wording_one: {
    justifyContent: "flex-end",
    flex: .2,
    paddingHorizontal: 40,
    alignItems: "center",
    fontSize: 60,
}
})