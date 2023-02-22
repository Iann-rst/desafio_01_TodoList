import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

import { styles } from './styles';
import { TasksProps } from "../../screens/Home";

interface props {
  data: TasksProps;
  onTaskRemove: () => void;
  onTaskDone: () => void;
}

export function Task({ data, onTaskRemove, onTaskDone }: props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onTaskDone}
        style={data.isCompleted ? styles.buttonChecked : styles.buttonUnchecked}>
        {data.isCompleted && <Icon name="checkmark" size={20} color="#F2F2F2" />}
      </TouchableOpacity>
      <Text style={[data.isCompleted ? styles.taskTextChecked : styles.taskText, { flex: 1, marginHorizontal: 12 }]}>{data.task}</Text>

      <TouchableOpacity onPress={onTaskRemove}>
        <Icon name="trash-outline" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}