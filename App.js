import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles/styles'; // Import your styles
import { buttons } from './Screen/db'; // Your buttons data
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TypeOfSigns from './Screen/typeOfSigns'; // Ensure correct path

const { height } = Dimensions.get('window');
const Stack = createStackNavigator();

const App = () => {
  // Function to handle button press and navigate to TypeOfSigns screen
  const handlePress = (type, navigation) => {
  const selectedType = buttons.find((item) => item.type === type);
  if (selectedType) {
    navigation.navigate('TypeOfSigns', { groups: selectedType.groups, type: selectedType.type });
  }
};

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  options={{ headerShown: false }}>
          {({ navigation }) => (
            <SafeAreaProvider> 
              <SafeAreaView style={styles.container}>
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
                      showSoftInputOnFocus={true} 
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
                        key={button.type}
                        style={styles.home_btn}
                        onPress={() => handlePress(button.type, navigation)} // Pass navigation and type
                      >
                        <Text style={styles.home_btn_text}>{button.type}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </KeyboardAvoidingView>

                <TouchableOpacity style={styles.scan_btn}>
                  <AntDesign name="scan1" size={45} color="#fff" />
                </TouchableOpacity>
              </SafeAreaView>
            </SafeAreaProvider>
          )}
        </Stack.Screen>

        <Stack.Screen name="TypeOfSigns" component={TypeOfSigns} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
