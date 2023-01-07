import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'


const Settings = () => {
    const dispatch = useDispatch()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style= {styles.logout} onPress= {()=> dispatch(logout())}>

        <Text style={{color:"white", fontSize:22}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    logout: {
        backgroundColor: "#de2918",
        padding: 20,
        width: "75%",
        justifyContent: "center",
        alignItems: "center"

    }
})