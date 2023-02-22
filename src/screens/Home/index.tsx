import { useState } from "react";
import { TouchableOpacity, TextInput, View, Text, FlatList, Alert, Keyboard } from "react-native";
import { Header } from "../../components/Header";
import Icon from "@expo/vector-icons/Ionicons";

import { v4 } from 'uuid';

import { styles } from './styles';
import { Task } from "../../components/Task";


export interface TasksProps {
  id: string;
  isCompleted: boolean;
  task: string;
}

export function Home() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState<TasksProps[]>([])


  const taskDone = tasks.filter((task) => task.isCompleted === true);

  function handleAddTask() {
    if (task.trim() === "") {
      return Alert.alert("TASK", "Task Empty!")
    }

    const newTask: TasksProps = {
      id: v4(),
      isCompleted: false,
      task
    }

    setTasks((prevStatus) => [...prevStatus, newTask])
    setTask("");
    Keyboard.dismiss()
  }

  function handleToggleTaskDone(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleRemoveTask(taskId: string) {
    Alert.alert("Remover", "Deseja remover a task?", [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((prevStatus) => prevStatus.filter(task => task.id !== taskId));
          return Alert.alert("Task removida!")
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTask}
            value={task}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Icon name="add-circle-outline" size={24} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.headerList}>
          <View style={styles.infoList}>
            <Text style={[styles.infoListText, { color: '#4ea8de' }]}>Criadas</Text>
            <Text style={styles.infoListCounterText}>{tasks.length}</Text>
          </View>

          <View style={styles.infoList}>
            <Text style={[styles.infoListText, { color: '#8284FA' }]}>Concluídas</Text>
            <Text style={styles.infoListCounterText}>{taskDone.length}</Text>
          </View>
        </View>


        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              data={item}
              onTaskRemove={() => handleRemoveTask(item.id)}
              onTaskDone={() => handleToggleTaskDone(item.id)}
            />
          )}
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        />

      </View>
    </>
  )
}