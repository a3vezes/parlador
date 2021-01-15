import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Input, Text, Divider, Button } from 'react-native-elements';
import AuthContext from '../context/auth/authContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const { isLoading, signUp } = useContext(AuthContext);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text h1 style={{ marginBottom: 20, textAlign: 'center' }}>
        Atlas Shrugged
      </Text>
      <Input placeholder='Name' onChangeText={value => setName(value)} />
      <Input placeholder='Email' onChangeText={value => setEmail(value)} />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />

      {isLoading ? (
        <Button title='Sign Up' loading />
      ) : (
        <Button title='Sign Up' onPress={() => signUp(email, password, name)} />
      )}
    </View>
  );
};

export default LoginScreen;
