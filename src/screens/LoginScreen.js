import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = ({navigation}) => {
  const [emailfocus, setEmailfocus] = useState(false);
  const [passwordfocus, setPasswordFocus] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Sign In</Text>
      <View style={styles.inputtext}>
        <AntDesign
          style={{marginTop: 10}}
          name="user"
          size={24}
          color={emailfocus === true ? 'red' : 'black'}
        />
        <TextInput
          placeholder="Email/ UserID"
          style={styles.input}
          onFocus={() => {
            setEmailfocus(true);
            setPasswordFocus(false);
            setShowpassword(false);
          }}
        />
      </View>
      <View style={styles.inputtext}>
        <MaterialIcon
          name="lock-outline"
          size={24}
          style={{marginTop: 10}}
          color={passwordfocus === true ? 'red' : 'black'}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onFocus={() => {
            setEmailfocus(false);
            setPasswordFocus(true);
          }}
          secureTextEntry={showpassword === false ? true : false}
        />
        <Octicons
          name={showpassword == false ? 'eye-closed' : 'eye'}
          style={{marginTop: 10}}
          size={24}
          onPress={() => setShowpassword(!showpassword)}
          color={showpassword == false ? 'black' : 'red'}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.buttontext}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.fpassword}>Forget Password?</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gificon}>
            <AntDesign name="google" size={24} color="blue" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gificon}>
            <Entypo name="facebook" size={24} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <Text
        style={{fontSize: 18}}
        onPress={() => navigation.navigate('Signup')}>
        Don't have an Account?
        <Text style={[styles.signup, {fontSize: 18}]}> Sign Up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputtext: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: '80%',
  },
  btn: {
    marginVertical: 10,
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  fpassword: {
    color: 'gray',
    marginTop: 10,
    fontSize: 18,
  },
  or: {
    color: '#000000',
    marginTop: 10,
    fontSize: 18,
  },
  gftxt: {
    color: '#000000',
    marginVertical: 10,
    fontSize: 18,
  },
  gf: {
    flexDirection: 'row',
  },
  gificon: {
    backgroundColor: '#fff',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 10,
  },
  hr: {
    width: '80%',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  signup: {
    color: 'red',
  },
});

export default LoginScreen;
