import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Adduser from './Src/Adduser';
import Userlist from './Src/Userlist';
import Icon from 'react-native-vector-icons/Entypo';
import { RecoilRoot } from 'recoil';
import Edituser from './Src/Edituser';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <RecoilRoot>
  <NavigationContainer>
     <Tab.Navigator>
      <Tab.Screen name="Adduser" component={Adduser} options={{
        tabBarLabel: 'Add User',
        tabBarIcon: ({ color, size }) => (
          <Icon name="add-user" size={size} color={color} />
        ),
      }} />
      <Tab.Screen  name="Userlist" component={Userlist} options={{
        tabBarLabel: 'User List',
        tabBarIcon: ({ color, size }) => (
          <Icon name="list" size={size} color={color} />
        ),
      }} />
      <Tab.Screen  name="Edituser" component={Edituser} options={{
        tabBarLabel: 'Edit User',
        tabBarIcon: ({ color, size }) => (
          <Icon name="edit" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  </NavigationContainer>
  </RecoilRoot>
  )
}

const styles = StyleSheet.create({})