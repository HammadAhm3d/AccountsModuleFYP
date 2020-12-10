import React, {useContext, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import firebase from 'firebase';
import {AuthContext} from '../navigation/AuthProvider';



const HomeScreen = ({navigation}) => {


  const {user, logout} = useContext(AuthContext);

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyAiFLKc-6Xs9idEQIzzOeIMugurFFB64NE",
      authDomain: "accountsmodule.firebaseapp.com",
      databaseURL: "https://accountsmodule.firebaseio.com",
      projectId: "accountsmodule",
      storageBucket: "accountsmodule.appspot.com",
      messagingSenderId: "224144708229",
      appId: "1:224144708229:web:3c983598cd6571fd8a4fec",
      measurementId: "G-282FDBCTY5"
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

      firebase.database().ref(`Users/${user.uid}`).set({
        email: user.email,
      }).then((data)=>{
          //success callback
          console.log('data ' , data);
      }).catch((error)=>{
          //error callback
          console.log('error ' , error);
      })
  }, []);


    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>User ID: {user.uid}</Text>
        <FormButton 
          buttonTitle="Logout"
          onPress={ () => logout() }
        />
      </View>
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
}
);
