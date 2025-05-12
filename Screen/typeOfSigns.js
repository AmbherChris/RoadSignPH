import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from '../styles/styles';  // Adjust the path to your styles

const TypeOfSigns = ({ route }) => {
  const { groups, type, description } = route.params; // Destructure the params passed from Home
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={{ alignItems: 'center', backgroundColor: '#0B082C', paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: '#4CAF50',
              paddingHorizontal: 5,
              marginHorizontal: 20,
              marginTop: 40,
              paddingTop: 10,
              width: '100%',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 10 }}>
              <AntDesign style={{ color: '#fff', paddingTop: 10 }} name="caretleft" size={24} />
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>{type}</Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 10,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  marginVertical: 10,
                  borderRadius: 8,
                }}
              >
                {description}
              </Text>
            </View>
          </View>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={{ flex: 2, padding: 16, backgroundColor: '#0B082C' }}>
      {groups.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.groupOfSigns_btn}
          onPress={() =>
            navigation.navigate('Sign', {
              group: item.group,
              description: item.description,
              signs: item.signs, // Assuming 'signs' is an array of sign details
              image: item.image, // Optional image if available
            })
          }
        >
          <Text style={styles.home_btn_text}>{item.group}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default TypeOfSigns;
