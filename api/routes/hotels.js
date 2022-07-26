import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
// @route   POST /api/hotels
// @desc    Create a hotel
// @access  Private
router.post("/", verifyAdmin, createHotel);

//Update
// @route   PUT /api/hotels/:id
// @desc    Update a hotel
// @access  Private
router.put("/:id",verifyAdmin, updateHotel);

//Delete
// @route   DELETE /api/hotels/:id
// @desc    Delete a hotel
// @access  Private
router.delete("/:id", verifyAdmin, deleteHotel);

//Get
// @route   GET /api/hotels/:id
// @desc    Get a hotel id
// @access  Private
router.get("/find/:id", getHotel);

//Get All
// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Private
router.get("/", getAllHotels);

//Get All
// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Private
router.get("/countByCity", countByCity);

//Get All
// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Private
router.get("/countByType", countByType);

export default router;
