import React from 'react';
import Router from './src/Router';
import AuthState from './src/context/auth/AuthState';
import PostsState from './src/context/posts/PostsState';

export default function App() {
  return (
    <AuthState>
      <PostsState>
        <Router></Router>
      </PostsState>
    </AuthState>
  );
}
