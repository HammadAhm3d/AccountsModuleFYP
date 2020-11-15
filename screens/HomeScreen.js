import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

import {AuthContext} from '../navigation/AuthProvider';
const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
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