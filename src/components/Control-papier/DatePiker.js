
import React, { useState } from 'react'
import DatePicker from '@react-native-community/datetimepicker'
import { Platform, View, Text, Button, Pressable } from 'react-native';

export default function MyDatePicker() {
 const [date, setDate] = useState(new Date());
 const [mode, setMode] = useState('date');
 const [show, setShow] = useState(false);
 const [text, setText] = useState('Enter date');

 const onChange = (event, selectedDate) => {
   const currentDate = selectedDate || date;
   setShow(Platform.OS === 'ios');
   setDate(currentDate);

   let tempDate = new Date(currentDate);
   let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
   setText(fDate)

 }

 const showMode = (currentDate) => {
   setShow(true);
   setMode(currentDate);
 }

 return (
   <>
    <Pressable onPress={()=> showMode('date')}>
     <Text>{text} </Text>
   </Pressable>
   {show && [
     <DatePicker
     testID= 'datePicker'
     value={date}
     mode={mode}
     is24Hour={true}
     display='default'
     onChange={onChange}
     />
   ]}
   </>
  
 )
}
//   render(){
//     return (
//       <DatePicker
//         style={{width: 200}}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="YYYY-MM-DD"
//         minDate="2016-05-01"
//         maxDate="2016-06-01"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 4,
//             marginLeft: 0
//           },
//           dateInput: {
//             marginLeft: 36
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => {this.setState({date: date})}}
//       />
//     )
//   }
// }