import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { comparePassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    // Validation check
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone number is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }

    // Check if the user already exists in the database
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered. Please login.",
      });
    }

    const hashedPassword = await hashPassword(password); // Assuming there is a hashPassword function defined elsewhere
    console.log("hased passwprd", hashPassword);

    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
// POST LOGIN
export const loginController = async (req, res) => {
  
  try {
    console.log("login controller inside");
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    // Format for JWT.sign(payload, secretOrPrivateKey, [options])
    console.log(token, "token");
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// testing JWT Secret Key
export const testController = (req, res) => {
  console.log("valuable data");
};
