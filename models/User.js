const User = require('./models/User'); // Adjust the path as needed

// Create a new user
const newUser = new User({ name, email, password });
await newUser.save();

// Find a user by email
const user = await User.findOne({ email });

// Update a user's profile
await User.findByIdAndUpdate(userId, { name: 'New Name' });
