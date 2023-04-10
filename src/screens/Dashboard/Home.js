import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
const Home = ({navigation}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('User', JSON.stringify(user));
      setUser(user);
    });
    return subscriber;
  }, []);

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure ? You want to logout?',
      [
        {
          text: 'Cancle',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace('Welcome'))
              .catch(error => {
                console.log(error);
                if (error.code === 'auth/no-current-user')
                  navigation.replace('Welcome');
                else Alert.alert(error);
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <Text>Home</Text>
      {user ? (
        <Text>Welcome {user.displayName ? user.displayName : user.email}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={logout}>
        <Text style={styles.buttonTextStyle}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default Home;
