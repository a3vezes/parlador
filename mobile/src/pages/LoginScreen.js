import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Input, Text, Divider, Button } from 'react-native-elements';
import AuthContext from '../context/auth/authContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading, signIn, restoreToken } = useContext(AuthContext);

  useEffect(() => {
    restoreToken();
    // eslint-disable-next-line
  }, []);

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
      <Input
        placeholder='Email'
        onChangeText={value => setEmail(value)}
        Style={{ width: '100%' }}
      />
      <Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <View>
        {isLoading ? (
          <Button title='Sign In' loading />
        ) : (
          <Button title='Sign In' onPress={() => signIn(email, password)} />
        )}

        <Text style={{ textAlign: 'center', marginVertical: 15 }}>Or</Text>

        <Button
          title='Sign Up'
          onPress={() => navigation.navigate('Sign Up')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
