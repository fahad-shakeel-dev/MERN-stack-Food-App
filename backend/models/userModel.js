// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, default:"user" },
//     cartData: { type: Object, default: {} },
//   },
//   { minimize: false }
// );

// const userModel = mongoose.model.user || mongoose.model("user", userSchema);
// export default userModel;

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);
// export default User;


// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: "user" }, // Ensure role field is defined
// }, { timestamps: true });

// const User = mongoose.model("User", userSchema);
// export default User;









// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   cartData: {
//     type: Object,
//     default: {},
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const userModel = mongoose.model('User', userSchema);
// export default userModel;








import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String, // Optional for social logins
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  facebookId: {
    type: String,
    unique: true,
    sparse: true,
  },
  cartData: {
    type: Object,
    default: {},
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;