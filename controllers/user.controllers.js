// **User crud operations**
const Post = require("../models/Post");
const User = require("../models/User");

// 1. Create a User: Implement a `POST /users` endpoint to create a new user.

const createUser = async (req, res) => {
  try {
    const create = await User.create(req.body);
    res.status(201).send(create);
  } catch (error) {
    res.status(500).json({ message: "error in create user😒" });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 2. Get all Users: Implement a `GET /users` endpoint to fetch all users.

const getAllUsers = async (req, res) => {
  try {
    const get = await User.findAll();
    res.status(201).send(get);
  } catch (error) {
    res.status(500).json({ message: "error in get all user😢" });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 3. Update a User: Implement a `PUT /users/:id` endpoint to update user details.

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await User.findByPk(id);

    if (!findUser) {
      return res.status(404).json({ message: "user not found!🤳" });
    }

    const update = await findUser.update(req.body);
    res.status(200).send(update);
  } catch (error) {
    res.status(500).json({ message: "error in update user🤦‍♀️" });
  }
};

// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

// 4. Delete a User: Implement a `DELETE /users/:id` endpoint to delete a user.

const deleteUser =  async(req,res)=>{
  try {
    const { id } = req.params;
    const deleteUser = await User.findByPk(id);

    if (!deleteUser) {
      return res.status(404).json({ message: "user not found!🤳" });
    }

   await deleteUser.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "error in delete user ❌" });
  }
}


module.exports = { createUser, getAllUsers, updateUser,deleteUser};
