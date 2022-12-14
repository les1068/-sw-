import React, { useState } from "react";
import {  View, Text, Button,StyleSheet, ScrollView, TextInput,ImageBackground} from "react-native";
import Todo from "./Todo";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
function Todolist() {
    const [tittle, setTittle] = useState("To do list")
    const [text,setText] = useState()
    const [list, setList] = useState([]);
    
    const addItem = () => {
        const updatedList = list;
        updatedList.push(text)
        setList(updatedList);
        setText('')
    }
    const Example = () => {
      const [startDate, setStartDate] = useState(new Date());}

    const deleteItem = (index) => {
        const updatedList = list.filter((todo) => todo !== index);
        setList(updatedList)
    }
    return (
      <>
      <ImageBackground source={require('../assets/es.jpg')}
      
      style={{width: '100%', height: '100%'}} >
        
        <View style={{ width: "80%", marginBottom: 60 }}>
          
          <Text style={[styles.align, styles.font]}>{tittle}</Text>
          
          <ScrollView>
           {list.map((x,index) => <Todo key={index} item={x} index={index} delete={deleteItem}/>)}
          </ScrollView>

          <View>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={(text) => setText(text)}
            />
            <Button title="Add item" onPress={addItem} />
          </View>
          
        </View>
        </ImageBackground>
      </>
    );
}
const styles = StyleSheet.create({
    align:{
        alignSelf:"center"
    },font:{
        fontSize:20,
        fontWeight:'bold'
    },input:{
borderRadius:5,
borderWidth:1,
marginBottom:8,
padding:8
    }
})
export default Todolist
