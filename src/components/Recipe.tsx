import { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "./Header";
import Footer from "./footer";

interface Recipe {
  id: number;
  recipename: string;
  image?: string;
  ingredients: string[];
  description: string;
}

async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await response.json();
  return data as Recipe[];
}

const RecipeCard = ({ recipename, description }: Recipe) => {
  return (
    <Card className="w-full md:w-[350px]">
      <CardHeader>
        <CardTitle>{recipename}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
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

const Recipe = () => {
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

export default Recipe;
