import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthContext from './context/auth/authContext';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';
import CreatePostScreen from './pages/CreatePostScreen';
import EditPostScreen from './pages/EditPostScreen';

const Router = () => {
  const authContext = useContext(AuthContext);

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {authContext.userToken == null ? (
          <>
            <Drawer.Screen name='Sign In' component={LoginScreen} />
            <Drawer.Screen name='Sign Up' component={SignUpScreen} />
          </>
        ) : (
          <>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Create Post' component={CreatePostScreen} />
            <Drawer.Screen
              name='Edit Post'
              component={EditPostScreen}
              initialParams={{ postId: 123 }}
            />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
