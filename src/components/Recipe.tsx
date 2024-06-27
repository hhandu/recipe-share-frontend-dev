import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Header from "./Header";
import Footer from "./footer";

interface Recipe {
  id: number;
  title: string;
  subTitle?: string;
  image?: string;
  ingredients: string[];
  description: string;
  tags: string[];
  totalComments: number;
}

async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch("https://recipe-share-api.vercel.app/recipes");
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await response.json();
  return data as Recipe[];
}

const RecipeCard = ({ title, subTitle, description, tags, totalComments }: Recipe) => {
  return (
    <Card className="w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>Name: {title}</CardTitle>
        <CardDescription>{subTitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <p id="description">{description}</p>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="tags">Tags</Label>
            <div id="tags" className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="comments">Total Comments</Label>
            <p id="comments">{totalComments}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => (
  <div className="recipe-list grid grid-cols-1 md:grid-cols-3 gap-4">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} {...recipe} />
    ))}
  </div>
);

const RecipePage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRecipes = await fetchRecipes();
        setRecipes(fetchedRecipes);
      } catch {
        setError("Failed to load recipes. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="recipe-page p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4 text-center py-3">Recipes</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
      <Footer />
    </div>
  );
};

export default RecipePage;
