import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Profile = () => {

  const [title, setTitle] = useState()

  const [description, setDescription] = useState()

  const createTodo = async() => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/create/', {
        title: title,
        description: description
      })
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:20 }}>
      <TextInput
        style={styles.input}
        onChangeText={val => setTitle(val)}
        value={title}
      />
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
  )
}

export default Profile

const styles = StyleSheet.create({

  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    height: 50,
    width: "100%"
  }
})