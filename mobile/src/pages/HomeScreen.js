import React, { useEffect, useContext } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { Card, Text, Icon, Button } from 'react-native-elements';
import AuthContext from '../context/auth/authContext';
import PostsContext from '../context/posts/postsContext';

const HomeScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  const { getPosts, deletePosts, posts, loading } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <ScrollView>
      <Text h1 style={{ marginTop: 50, textAlign: 'center' }}>
        Lastest Posts
      </Text>
      {loading ? (
        <ActivityIndicator size='large' color='#333' />
      ) : (
        posts.map(p => (
          <Card key={p._id}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Card.Title>{p.user.name}</Card.Title>
              <Icon
                name='trash'
                reverse
                type='font-awesome'
                size={12}
                onPress={() => {
                  deletePosts(p._id);
                }}
              />
            </View>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>{p.text}</Text>
            <Card.Divider />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ textAlign: 'right' }}>{p.date}</Text>
              <Icon
                name='edit'
                reverse
                type='font-awesome'
                size={12}
                onPress={() => {
                  navigation.navigate('Edit Post', { postId: p._id });
                }}
              />
            </View>
          </Card>
        ))
      )}

      <Button
        title='Sign Out'
        buttonStyle={{ margin: 15 }}
        onPress={() => {
          signOut();
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;
