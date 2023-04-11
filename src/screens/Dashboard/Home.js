import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {firebase} from '../firebase/firebase';

const Home = ({navigation, route}) => {
  const userInfo = route.params.data;
  const userInfo1 = route.params.data1;
  //console.log('line 09', userInfo.email);
  const [user, setUser] = useState();
  const dataRef = firebase.firestore().collection('name');

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(user => {
  //     console.log('User Line 13', JSON.stringify(user));
  //     setUser(user);
  //   });
  //   return subscriber;
  // }, []);

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
      {userInfo ? (
        <View>
          <Text>Welcome {userInfo.displayName}</Text>
          <Text>Welcome {userInfo.email}</Text>
        </View>
      ) : (
        <View>
          <Text>Welcome {userInfo1.givenName}</Text>
          <Text>Email Id : {userInfo1.email}</Text>
        </View>
      )}

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
