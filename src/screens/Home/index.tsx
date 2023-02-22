import { useState } from "react";
import { TouchableOpacity, TextInput, View, Text, FlatList } from "react-native";
import { Header } from "../../components/Header";
import Icon from "@expo/vector-icons/Ionicons";

import { styles } from './styles';


interface TasksProps {
  id: string;
  isCompleted: boolean;
  task: string;
}

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <Icon name="add-circle-outline" size={24} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.headerList}>
          <View style={styles.infoList}>
            <Text style={[styles.infoListText, { color: '#4ea8de' }]}>Criadas</Text>
            <Text style={styles.infoListCounterText}>0</Text>
          </View>

          <View style={styles.infoList}>
            <Text style={[styles.infoListText, { color: '#8284FA' }]}>Concluídas</Text>
            <Text style={styles.infoListCounterText}>0</Text>
          </View>
        </View>

      </View>
    </>
  )
}