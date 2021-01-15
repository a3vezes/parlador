import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import PostsContext from '../context/posts/postsContext';

const CreatePostScreen = ({ navigation }) => {
  const { createPosts } = useContext(PostsContext);

  const [text, setText] = useState('');

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text h1 style={{ margin: 50, textAlign: 'center' }}>
        Create Posts
      </Text>

      <Input
        placeholder='Post'
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={value => setText(value)}
        multiline={true}
        maxLength={280}
        defaultValue={text}
      />

      <Button
        title='Create'
        onPress={() => {
          createPosts(text);
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default CreatePostScreen;
