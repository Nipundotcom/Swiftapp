import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useRecoilState } from 'recoil';
import { usersState } from './Atom';  

export default function UserList({ navigation }) {

  const [users, setUsers] = useRecoilState(usersState);

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Name: {item.name}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Phone: {item.Phone}</Text>
        <Text>Address: {item.address}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleEditUser(item)}>
          <Icon name="edit" style={{marginRight: 10}} size={22} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteUser(item)}>
          <Icon style={{marginLeft: 10}} name="trash" size={22} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleEditUser = (user) => {
    navigation.navigate('Edituser', { user });
  };

  const handleDeleteUser = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>User List:</Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUserItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 16,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  userItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  iconContainer: {
    flexDirection: 'row',
  },
});
