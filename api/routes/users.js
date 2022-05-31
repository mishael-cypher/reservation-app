import  express  from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get('/chechauth', verifyToken, (req, res, next) => {
//     res.send('Hello User, you are authenticated')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('Hello User, you are loggedin and can delete')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, you are loggedin and can delete all accounts')
// })


//Update
// @route   PUT /api/users/:id
// @desc    Update a User
// @access  Private
router.put("/:id", verifyUser, updateUser);

//Delete
// @route   DELETE /api/users/:id
// @desc    Delete a User
// @access  Private
router.delete("/:id", verifyUser, deleteUser);

//Get
// @route   GET /api/users/:id
// @desc    Get a hotel id
// @access  Private
router.get("/:id", verifyUser, getUser);

//Get All
// @route   GET /api/users
// @desc    Get all hotels
// @access  Private
router.get("/", verifyAdmin, getUsers);


export default router;