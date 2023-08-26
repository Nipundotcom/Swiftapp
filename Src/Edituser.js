import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { usersState } from './Atom';
import { useNavigation } from '@react-navigation/native';

const Edituser = ({ route }) => {
    const navigation = useNavigation(); 
    const { user } = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');

    const [users, setUsers] = useRecoilState(usersState);

    // Set initial state values based on the user data when component mounts
    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setAge(user.age);
        setAddress(user.address);
        setPhone(user.Phone);
    }, [user]);

    const handleSubmit = () => {
        const updatedUser = {
          ...user,
          name,
          email,
          age,
          address,
          Phone,
        };
        const updatedUsers = users.map((u) => (u === user ? updatedUser : u));
        setUsers(updatedUsers);
        navigation.goBack();
        setName('');
        setEmail('');
        setAge('');
        setAddress('');
        setPhone('');
      };

  return (
    <View style={styles.container}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        />

        <Text style={styles.label}>Age:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={Phone}
        onChangeText={setPhone}
        keyboardType="numeric"
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
        />

        <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default Edituser

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 8,
      marginBottom: 16,
    },
  })