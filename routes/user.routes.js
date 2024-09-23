const { Router } = require("express");
const { createUser, getAllUsers,updateUser ,deleteUser} = require("../controllers/user.controllers");
const postRoutes = require("./post.routes.js");


const router = Router();

router.get("/",getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id",deleteUser);



router.use("/:userId/posts", postRoutes);


module.exports = router;

// Create a User: Implement a `POST /users` endpoint to create a new user.
// 2. Get all Users: Implement a `GET /users` endpoint to fetch all users.
// 3. Update a User: Implement a `PUT /users/:id` endpoint to update user details.
// 4. Delete a User: Implement a `DELETE /users/:id` endpoint to delete a user.
