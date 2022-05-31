import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
// @route   POST /api/rooms
// @desc    Create a room
// @access  Private
router.post("/:hotelid", verifyAdmin, createRoom);

//Update
// @route   PUT /api/rooms/:id
// @desc    Update a room
// @access  Private
router.put("/:id", verifyAdmin, updateRoom);

//Delete
// @route   DELETE /api/rooms/:id
// @desc    Delete a room
// @access  Private
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//Get
// @route   GET /api/rooms/:id
// @desc    Get a room id
// @access  Public
router.get("/:id", getRoom);

//Get All
// @route   GET /api/rooms
// @desc    Get all rooms
// @access  Public
router.get("/", getAllRooms);

export default router;
