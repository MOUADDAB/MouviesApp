import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
class Salam extends React.Component{
 constructor(){
 super();
 this.state={
 name:"noBody", 
 }
 }
 onButtonClicked(){
 this.setState(
 {
 name:"tt le monde!"
 }
 )
 }
 
 render(){
 return(
 <View style={styles.container}>
 <Text style={styles.titleText}>Salam {this.props.username}</Text>
 <TextInput placeholder="Saisir un autre nom S.V.P "/>
 <Button title="Click me"
 onPress={()=>this.onButtonClicked()}/>
 <Text style={styles.titleText}>salam {this.state.name}</Text>
 </View>
 );
 }
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#0000ff',
 alignItems: 'center',
 justifyContent: 'center',
 },
 titleText:{
 color:'white', 
 fontSize: 30, 
 fontWeight: 'bold'
 },
 });
export default Salam;