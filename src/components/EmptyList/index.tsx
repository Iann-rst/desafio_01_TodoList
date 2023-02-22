import { Image, Text, View } from "react-native";
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./../../assets/Clipboard.png')} />
      <Text style={[styles.subTitle, styles.strong]}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}