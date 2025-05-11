import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const TypeOfSigns = ({ route }) => {
  const { groups, type } = route.params;
   const navigation = useNavigation();


   useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={{alignItems:'center'}}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center', // Center the header content
          
          backgroundColor: '#4CAF50', // Header background color
          height: 200, // Adjust header height
          paddingHorizontal: 0,
          paddingTop:30,
          marginTop:40,
          width: '90%',

        }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20 }}>
            <Text style={{ color: '#fff', fontSize: 18, paddingTop:30 }}>Back</Text>
          </TouchableOpacity>
          <Text style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
            {type}
          </Text>
        </View>
        </View>
      ),
    });
  }, [navigation]);

  return (

    <>
    
    <ScrollView contentContainerStyle={{ padding: 16, alignItems:'center', backgroundColor: '#f2f2f2'}}>
      

      {groups.map((item, index) => (
        <View key={index} style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 18 }}>{item.group}</Text>
        </View>
      ))}
    </ScrollView>
    </>
  );
};

export default TypeOfSigns;
