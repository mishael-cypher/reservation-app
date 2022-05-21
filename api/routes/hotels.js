import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

//Create
// @route   POST /api/hotels
// @desc    Create a hotel
// @access  Private
router.post("/", createHotel);

//Update
// @route   PUT /api/hotels/:id
// @desc    Update a hotel
// @access  Private
router.put("/:id", updateHotel);

//Delete
// @route   DELETE /api/hotels/:id
// @desc    Delete a hotel
// @access  Private
router.delete("/:id", deleteHotel);

//Get
// @route   GET /api/hotels/:id
// @desc    Get a hotel id
// @access  Private
router.get("/:id", getHotel);

//Get All
// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Private
router.get("/", getAllHotels);

export default router;
