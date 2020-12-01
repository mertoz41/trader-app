import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import store from '../redux/store'


export default function Login(){


    const [username, usernameChange] = React.useState()
    const [password, passwordChange] = React.useState()


    const fetchUser = () => {
        let obj = {
            username: username,
            password: password 
        }
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.user){
                store.dispatch({type: "LOG_USER_IN", currentUser: resp.user})
                console.log(resp.user)
            } else {
                Alert.alert(resp.message)
            }
    
        })
    }




        return(
            <View>
                <Text>Username:</Text>
                <TextInput onChangeText={text => usernameChange(text)} value={username} autoCapitalize='none'/>
                <Text>Password:</Text>
                <TextInput secureTextEntry={true} onChangeText={text => passwordChange(text)} value={password} />
                <Button title="LOGIN" onPress={() => fetchUser()} />
            </View>
        )
    }



