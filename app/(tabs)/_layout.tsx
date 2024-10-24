import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'blue',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              padding: 5,
              borderRadius: 30
            } : null}>
              <MaterialCommunityIcons name="home" size={28} color={color} />
            </View>
          }
        }}
      />

      <Tabs.Screen
        name="profiles"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'blue',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              padding: 5,
              borderRadius: 30
            } : null}>
              <FontAwesome size={28} name="user" color={color} />
            </View>
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'blue',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
              padding: 5,
              borderRadius: 30
            } : null}>

              <FontAwesome size={28} name="cog" color={color} />
            </View>
          }
        }}
      />
    </Tabs>
  );
}