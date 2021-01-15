import React, { useState, useContext, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import PostContext from '../context/posts/postsContext';

const ManagePostScreenScreen = ({ route, navigation }) => {
  const { post, getPost, updatePosts, loading } = useContext(PostContext);

  let { postId } = route.params;

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  const [text, setText] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text h1 style={{ margin: 50, textAlign: 'center' }}>
        Edit Post
      </Text>
      {loading ? (
        <ActivityIndicator size='large' color='#333' />
      ) : (
        <View>
          <Text h3>Old Post</Text>
          <Input
            placeholder='Post'
            multiline={true}
            maxLength={280}
            defaultValue={post.text}
            disabled
          />

          <Text h3>New Post</Text>
          <Input
            placeholder='New Post'
            onChangeText={value => setText(value)}
            multiline={true}
            maxLength={280}
            defaultValue={text}
          />

          <Button
            title='Edit'
            onPress={() => {
              updatePosts(postId, text);
              postId = null;
              setText('');
              navigation.navigate('Home');
            }}
          />
        </View>
      )}
    </View>
  );
};

export default ManagePostScreenScreen;
