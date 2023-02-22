import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },

  formContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -50
  },

  input: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    height: 54,
    backgroundColor: '#262626',
    fontSize: 16,
    color: '#FFF'
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4
  },

  headerList: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32
  },
  infoList: {
    flexDirection: 'row',
    alignItems: 'center'
  },


  infoListText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },

  infoListCounterText: {
    fontWeight: '700',
    color: '#FFF',
    fontSize: 12,
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999
  }

})