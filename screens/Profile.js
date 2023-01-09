import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'


const Profile = () => {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:20 }}>
      <Text>Profile</Text>
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