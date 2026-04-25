const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await userModel.create({
      ...req.body,
      password: hashedPassword
    });

    return res.status(200).json({ message: "user signup successfully" });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const isEmail = await userModel.findOne({ email });

  if (!isEmail) {
    return res.status(404).json({ message: "email not found" });
  }

  const isLogin = bcrypt.compareSync(password, isEmail.password);

  if (!isLogin) {
    return res.status(400).json({ message: "incorrect password" });
  }

  return res.status(200).json({ message: "login successfully" });
};

module.exports = {
  createUser,
  loginUser
};