import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Sign = ({ route }) => {
  const { group, description, signs } = route.params;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{group}</Text>
      <Text style={{ fontSize: 16, marginBottom: 12 }}>{description}</Text>

      {signs.map((sign, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Image source={sign.image} style={{ width: 100, height: 100 }} />
          <Text style={{ fontSize: 18 }}>{sign.name}</Text>
          <Text>{sign.description}</Text>
          
        </View>
        
      ))}
    </ScrollView>
  );
};

export default Sign;
