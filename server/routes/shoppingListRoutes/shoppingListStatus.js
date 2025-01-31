import { User } from "#models/User.js";

const shopingListStatus = async (req, res, next) => {
  const { _id } = res.locals.user;

  try {
    const user = await User.findById(_id);
    const shoppingList = user.shoppingList;
    return res.json(shoppingList).status(200);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export default shopingListStatus;
