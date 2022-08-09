const moongoose = require("mongoose");

const userSchema = moongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a user name"],
    },
    email: {
      type: String,
      required: [true, "please add a user email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
  },
  { timestamps: true }
);

module.exports = moongoose.model("user", userSchema);
