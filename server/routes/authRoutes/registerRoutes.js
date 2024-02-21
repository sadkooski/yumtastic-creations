import { User } from "#models/User.js";
import { isInDb } from "#helpers/usersHelpers.js";
import gravatars from "gravatar";

async function registerUser(req, res, next) {
  const { email, password } = req.body;
  const userInDb = await isInDb(email);
  if (userInDb) {
    return res.status(409).json({ message: "Email in use" });
  }
  try {
    const user = new User({ email });
    await user.setPassword(password);
    user.avatarURL = gravatars.url(email, { s: "200", d: "identicon" }, true);
    await user.save();
    res.status(201).json({ message: "Account created", user });
  } catch (err) {
    next(err);
  }
}

export { registerUser };
