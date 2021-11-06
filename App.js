import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>1) White</Text>
        <Text style={{color: 'black'}}>2) Black</Text>
        <Text style={{color: 'red'}}>3) Red</Text>
        <Text style={{color: 'green'}}>4) Green</Text>
        <Text style={{color: 'blue'}}>5) Blue</Text>
        <Text style={{color: '#fff'}}>6) White</Text>
        <Text style={{color: '#000'}}>7) Black</Text>
        <Text style={{color: '#f00'}}>8) Red</Text>
        <Text style={{color: '#0f0'}}>9) Green</Text>
        <Text style={{color: '#00f'}}>10) Blue</Text>
        <Text style={{color: '#ffffff'}}>11) White</Text>
        <Text style={{color: '#000000'}}>12) Black</Text>
        <Text style={{color: '#ff0000'}}>13) Red</Text>
        <Text style={{color: '#00ff00'}}>14) Green</Text>
        <Text style={{color: '#0000ff'}}>15) Blue</Text>
        <Text style={{color: '#fff7'}}>16) White (semi-Transparent)</Text>
        <Text style={{color: '#0007'}}>17) Black (semi-Transparent)</Text>
        <Text style={{color: '#f007'}}>18) Red (semi-Transparent)</Text>
        <Text style={{color: '#0f07'}}>19) Green (semi-Transparent)</Text>
        <Text style={{color: '#00f7'}}>20) Blue (semi-Transparent)</Text>
        <Text style={{color: '#ffffff77'}}>21) White (semi-Transparent)</Text>
        <Text style={{color: '#00000077'}}>22) Black (semi-Transparent)</Text>
        <Text style={{color: '#ff000077'}}>23) Red (semi-Transparent)</Text>
        <Text style={{color: '#00ff0077'}}>24) Green (semi-Transparent)</Text>
        <Text style={{color: '#0000ff77'}}>25) Blue (semi-Transparent)</Text>
        <Text style={{color: '#0007'}}>26) Black (semi-Transparent)</Text>
        <Text style={{color: '#fff0'}}>27) White (inivisible)</Text>
        <Text style={{color: '#0000'}}>28) Black (inivisible)</Text>
        <Text style={{color: '#f000'}}>29) Red (inivisible)</Text>
        <Text style={{color: '#0f00'}}>30) Green (inivisible)</Text>
        <Text style={{color: '#00f0'}}>31) Blue (inivisible)</Text>
        <Text style={{color: '#ffffff00'}}>32) White (inivisible)</Text>
        <Text style={{color: '#00000000'}}>33) Black (inivisible)</Text>
        <Text style={{color: '#ff000000'}}>34) Red (inivisible)</Text>
        <Text style={{color: '#00ff0000'}}>35) Green (inivisible)</Text>
        <Text style={{color: '#0000ff00'}}>36) Blue (inivisible)</Text>
        <Text style={{color: '#f0f'}}>37) Magenta</Text>
        <Text style={{color: '#ff0'}}>38) Yellow</Text>
        <Text style={{color: '#0ff'}}>39) Cyan</Text>
        <Text style={{color: '#ff00ff'}}>40) Magenta</Text>
        <Text style={{color: '#ffff00'}}>41) Yellow</Text>
        <Text style={{color: '#00ffff'}}>42) Cyan</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
