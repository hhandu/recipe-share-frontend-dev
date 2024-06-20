import { useEffect, useState } from "react";

interface Recipe {
    id: number;
    recipename: string;
    image: string;
    ingredients: string[];
    description: string;
  }
  
  async function fetchRecipes(): Promise<Recipe[]> {
    const response = await fetch("../../public/data.json"); // Adjust filename if needed
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data as Recipe[];
  }
  
  const RecipeCard = (recipe: Recipe) => {
    console.log("Recipe:", recipe); // For debugging
  
    return (
      <div className="recipe-card">
        {recipe.image && <img src={recipe.image} alt={recipe.recipename} />}
        <h3>{recipe.recipename}</h3>
        <p>{recipe.description}</p>
        {recipe.ingredients && (
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  function RecipeList({ recipes }: { recipes: Recipe[] }) {
    //const columns = window.innerWidth >= 960 ? 3 : 2; // Adjust breakpoint as needed
  
    return (
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} /> // Spread recipe object as props
        ))}
      </div>
    );
  }
  
  function Recipe() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedRecipes = await fetchRecipes();
          setRecipes(fetchedRecipes);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="recipe-page">
        <h1>Recipes</h1>
        <RecipeList recipes={recipes} />
      </div>
    );
  }
  
  export default Recipe;
  