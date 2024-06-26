import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ task, setTask, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a task"
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
});

export default ToDoForm;
