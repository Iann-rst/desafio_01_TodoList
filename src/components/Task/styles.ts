import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 8,
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 5,
    gap: 12,

    borderWidth: 1,
    borderColor: '#333333'
  },

  buttonChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E60CE'
  },

  buttonUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4EA8DE',
  },

  taskText: {
    color: '#F2F2F2',
    fontSize: 14,
    fontWeight: '400'
  },

  taskTextChecked: {
    color: "#808080",
    textDecorationLine: 'line-through',
    fontSize: 14,
    fontWeight: '400'
  }


})