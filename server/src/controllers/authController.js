import User from "../models/User.js";

// Handles new user registration
export async function registerUser(req, res) {
  const { id, name, email } = req.body; // Extract email and password from request body

  try {
    // Check if a user with the given email already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({ id, name, email });
    await user.save();
    // Respond with the generated token
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any errors that occur during the registration process
    return res.status(500).json({ message: "Server Error", error });
  }
}

// Handles user login
// export async function loginUser(req, res) {
//   let { email, password } = req.body; // Extract email and password from request body

//   try {
//     // Check if a user with the given email exists
//     let user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid Credentials" });
//     }

//     // Compare the provided password with the stored hashed password using the comparePassword function
//     const isMatch = await comparePassword(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid Credentials" });
//     }

//     // Create a JWT payload and generate a token
//     const payload = { userId: user._id };
//     const token = jwt.sign(payload, jwtSecret, {
//       expiresIn: "1h",
//     });

//     res.cookie("authToken", token, {
//       httpOnly: true,
//       secure: false,
//     });
//     return res.status(200).json({ message: "Successfully login", token });
//   } catch (error) {
//     // Handle any errors that occur during the login process
//     res.status(500).json({ message: "Server Error" });
//   }
// }

export async function getUsers(req, res) {
  try {
    let user = await User.findOne({});
    if (!user) {
      return res.status(400).json({ message: "Not founds" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error getting users" });
  }
}
