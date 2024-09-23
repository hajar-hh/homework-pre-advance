const { Router } = require("express");
const {createPost ,getAllPosts , updatePost,deletePost} = require("../controllers/post.controllers");

const router = Router({ mergeParams: true }) //با تشکر از هوش مصنوعی عزیز که بعد از مشقت‌های فراوانِ اینجانب در پست لعنتی، بنده را در این مورد راهنمایی کردند😫


router.get("/", getAllPosts);
router.post("/", createPost);
router.put("/:id" ,updatePost);
router.delete("/:id",deletePost);

module.exports = router;

// **Post crud operations**

// 1. Create a Post for a User: Implement a `POST /users/:userId/posts` endpoint to create a post for a specific user.
// 2. Get all Posts for a User: Implement a `GET /users/:userId/posts` endpoint to fetch all posts for a specific user.
// 3. Update a Post: Implement a `PUT /posts/:id` endpoint to update post details.
// 4. Delete a Post: Implement a `DELETE /posts/:id` endpoint to delete a specific post.
