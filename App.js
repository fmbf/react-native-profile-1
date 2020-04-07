import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';

import Profile from './Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />

      <Profile />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#061708',
    // borderColor: '#f00',
    // borderWidth: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
