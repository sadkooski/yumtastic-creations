import { Recipe } from "../../service/schemas/recipes.js";

const categoryMainPage = async (req, res, next) => {
  const categoryTitle = req.body.title;
  const findRecipes = await Recipe.find({ category: categoryTitle }).lean();
  try {
    return res.json(findRecipes).status(200);
  } catch (error) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export { categoryMainPage };
