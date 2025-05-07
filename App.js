import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, StatusBar, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'; // Correctly import SafeArea
import styles from './styles/styles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
const { height } = Dimensions.get('window'); // Get the screen height

const Flex = () => {
  const [buttons, setButtons] = useState([
    { id: 1, title: 'Regulatory Signs' },
    { id: 2, title: 'Warning Signs' },
    { id: 3, title: 'Guide/Informative Signs' },
    { id: 4, title: 'Signs on Expressway' },
    { id: 5, title: 'Traffic Instruction Signs' },
    { id: 6, title: 'Hazard Markings' },
    { id: 7, title: 'Road Work Signs' },
    { id: 8, title: 'Pavement Markings' },
    { id: 9, title: 'Informative Signs' },
  ]);

  const handlePress = (title) => {
    alert(`${title} Button Pressed!`);

  };

  return (

  <SafeAreaProvider> 
    <SafeAreaView style={styles.container}>
      
      {/* ✅ Add KeyboardAvoidingView only around content that moves */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={100} // adjust if needed
      >
        <View style={styles.top}>
          <Text style={styles.top_text}>
            List of LTO Traffic Signs and Symbols in the Philippines
          </Text> 
        </View>

        <View style={styles.search_container}>
          <TextInput
            placeholder="Search here..."
            style={styles.input}
            showSoftInputOnFocus={true}  // still allows typing
            caretHidden={true} 
            placeholderTextColor="Grey"
          />

          <TouchableOpacity style={styles.search_btn}>
            <Feather name="search" size={20} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.settings_btn}>
            <AntDesign name="setting" size={22} color="black" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {buttons.map((button) => (
            <TouchableOpacity
              key={button.id}
              style={styles.home_btn}
              onPress={() => handlePress(button.title)}>
              <Text style={styles.home_btn_text}>{button.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ✅ Keep this outside KeyboardAvoidingView */}
      <TouchableOpacity style={styles.scan_btn}>
      <AntDesign name="scan1" size={45} color="#fff" />
      </TouchableOpacity>

    </SafeAreaView>
  </SafeAreaProvider>


  );
};

export default Flex;
