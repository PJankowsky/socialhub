import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './redux/store';
import { Provider } from 'react-redux';
// import Routes from './navigations/Routes';

export default function App() {

  return (
    <Provider store={store}>
        {/* <Routes/> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
