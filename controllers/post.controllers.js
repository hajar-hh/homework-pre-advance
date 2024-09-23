// / **Post crud operations**
const Post = require("../models/Post");
const User = require("../models/User");

// 1. Create a Post for a User: Implement a `POST /users/:userId/posts` endpoint to create a post for a specific user.

const createPost = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${userId} not found👀` });
    }

    const create = await Post.create({ ...req.body, userId });
    res.status(201).send(create);
  } catch (error) {
    res.status(500).json({ message: `error in create post😒, ${error}` });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 2. Get all Posts for a User: Implement a `GET /users/:userId/posts` endpoint to fetch all posts for a specific user.

const getAllPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with id ${userId} not found👀` });
    }
    
    const posts = await Post.findAll({
      where: { userId }, 
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: `error in getting posts for user🔐, ${error.message}` });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 3. Update a Post: Implement a `PUT /posts/:id` endpoint to update post details.
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res
        .status(404)
        .json({ message: `Post with id ${id} not found👀` });
    }

    const updatedPost = await post.update(req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: `error in update post 🐱‍🐉, ${error}` });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 4. Delete a Post: Implement a `DELETE /posts/:id` endpoint to delete a specific post.

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    if (!post) {
      return res
        .status(404)
        .json({ message: `Post with id ${postId} not found👀` });
    }

    await post.destroy();
    res.status(200).json({ message: `Post with id ${postId} deleted successfully ✔✔` });
  } catch (error) {
    res.status(500).json({ message: `error in deleting post ❌, ${error.message}` });
  }
};



module.exports = { createPost, getAllPosts, updatePost ,deletePost};
