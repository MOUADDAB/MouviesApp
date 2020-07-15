import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
 
class Login extends React.Component {
 
 state = {
 email: '',
 password: ''
 }
 handleEmail(text) {
 this.setState({ email: text })
 }
 _handleEmail = (text) => {
 this.setState({ email: text })
 }
 _handlePassword = (text) => {
 this.setState({ password: text })
 }
 _login = (email, pass) => {
 alert('email: ' + email + ' password: ' + pass)
 }
 render() {
 return (
 <View style={styles.container}>
 <Image
 style={styles.tinyLogo}
 source={{
 uri: 'https://reactnative.dev/img/tiny_logo.png',
 }}/>
 <TextInput style={styles.input}
 placeholder="Email"
 placeholderTextColor="#4488ff"
 autoCapitalize="none"
 onChangeText={this._handleEmail} />
 
 <TextInput style={styles.input}
 placeholder="Password"
 placeholderTextColor="#4488ff"
 autoCapitalize="none"
 onChangeText={this._handlePassword} />
 
 <TouchableOpacity
 style={styles.submitButton}
 onPress={
 () => this._login(this.state.email, this.state.password)
 }>
 <Text style={styles.submitButtonText}> Submit </Text>
 </TouchableOpacity>
 </View>
 )
 }
}
export default Login
 
const styles = StyleSheet.create({
 container: {
 paddingTop: 23,
 
 },
 input: {
 margin: 15,
 padding: 10,
 height: 40,
 borderColor: '#4488ff',
 borderWidth: 1
 
 },
 submitButton: {
 backgroundColor: '#4488ff',
 padding: 10,
 margin: 15,
 height: 40,
 },
 submitButtonText: {
 color: 'white'
 },
 tinyLogo: {
 width: 50,
 height: 50,
 
 }
})