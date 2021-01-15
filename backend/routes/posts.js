const express = require('express');
const {
  createPost,
  getPosts,
  getPost,
  deletePost,
  updatePost,
} = require('../controllers/post');
const Post = require('../models/Post');
const advancedResults = require('../middleware/advancedResults');

const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(advancedResults(Post, 'user'), protect, getPosts)
  .post(protect, createPost);

router
  .route('/:id')
  .get(protect, getPost)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
