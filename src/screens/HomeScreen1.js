import React, {useState} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from './header'
import TodoItem from './TodoItem'
import AddTodo from './addTodo'
import ShiftTimingScreen from './date';

const HomeScreen1 = function()  {
  const [todos, setTodos] = useState('');
  //console.log(todos);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key!=key)
    });
  }
  const submitHandler = (text, time) =>{
    setTodos((prevTodos) => {
      return [
        {text: text,time:time, key:Math.random().toString()},
        ...prevTodos
      ];
    })
  }
  //render()
  return (
  <View style = {styles.container}>
    <Header/>
  <View style={styles.content}>
    <AddTodo submitHandler={submitHandler}/>
    <View style={styles.list}>
      <FlatList data={todos}
      renderItem={({item}) => (
        <TodoItem item = {item} pressHandler={pressHandler}/>
      )}/>
    </View>
  </View>

  </View>
  );};

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor:'#fff',
  },
  content: {
    padding: 40,

  },
  list:{
    marginTop:20
  }
},
);

export default HomeScreen1;
