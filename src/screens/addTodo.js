import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
//import { Value } from 'react-native-reanimated';
import ShiftTimingScreen from '../screens/date';


export default function AddTodo({submitHandler, item}){
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const changeHandler = (val) => {
       setText(val);
    };
    const changeHandler1 = (val) => {
      setTime(val);
   };

  //   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  //   const { selectedHours } = this.state;
  // const showDatePicker1 = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   //console.warn("A date has been picked: ", date);
  //   this.setState({selectedHours:date});
  //   hideDatePicker();
  // };


  //   const changeHandlerForTime = (val) => {
  //       setTime(val);
  //    }

    return(
        <View>
            {/* <View> */}
            <TextInput style={styles.input}
            placeholder='Enter new task'
            onChangeText={changeHandler}/>
            <TextInput style={styles.input}
            placeholder='Enter Time'
            onChangeText={changeHandler1}/>
            <Text style={styles.output}>    (or)      </Text>
            <ShiftTimingScreen/>
            {/* </View>
            <View>
            <TextInput style={styles.input} onFocus={showDatePicker1}  title='add date' color='black'/>
            <Text>{selectedHours}</Text>
            <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => handleConfirm(date)}
        onCancel={hideDatePicker}
      /> */}
            {/* </View> */}
          <Button onPress={() => submitHandler(text, time)} title='add todo' color='coral' />  
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    },
    output:{
      color: "red",
      fontWeight: 'bold'
    }
})