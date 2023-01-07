import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../redux/slices/authSlice"


const Login = ({navigation}) => {

  const [errorShown, setErrorShown] = useState(false)

  const [error, setError] = useState()

  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const dispatch = useDispatch()

  const letters = (val) => {
    setUsername(val);
  }
  const passwords = (val) => {
    setPassword(val);
  }

  let timer = 0

  const delay = 3000

  const attemptLogin = () => { 
    if (username === "p" && password === "p"){
       console.log("hello world");
    dispatch(login())
    } 
    else {
      setErrorShown(true)
      setError("Username or Password inccorect");
    }
    clearTimeout(timer)
    timer = setTimeout(()=> {
      setErrorShown(false);
    }, delay)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.inputGroup}>
      <Text>username</Text>
      <TextInput style={styles.textInput}
      onChangeText= {(val) => letters(val)}
      value= {username}/>
      </View>
      <View style={styles.inputGroup}>
        <Text>Password</Text>
      <TextInput style={styles.textInput}
      secureTextEntry= {true}
      onChangeText= {(val) => passwords(val)}
      value= {password}/>
      </View>     
      {errorShown && <><Text style={styles.error}>{error}</Text></>}
      <TouchableOpacity style={styles.loginButton}
      onPress = {attemptLogin}
      >

      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button title='Register'
      onPress={() => navigation.navigate("Register")}/>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "100%",
    padding: 5,
    borderWidth: 1,
    marginBottom: 30,
  },
  fontBig: {
    fontSize: 100
  },
  loginButton: {
    backgroundColor: "lightblue",
    padding: 20,
    width: "75%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  inputGroup: {
    width: "100%",
    paddingHorizontal: 40,
  },
  error: {
    color: "red",
    marginBottom: 20,
    }
})