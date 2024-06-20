import { useEffect, useState } from "react";

import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
interface Recipe {
  id: number;
  recipename: string;
  image?: string;
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
  return (
    <div>
         <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{recipe.recipename}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
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
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
    </div>
  );
};

function RecipeList({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="recipe-list grid grid-cols-3 gap-4"> {/* Apply grid styles */}
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

function Recipe() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null); // Track errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRecipes = await fetchRecipes();
        setRecipes(fetchedRecipes);
      } catch (error) {
        setError("Failed to load recipes. Please try again later.");
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recipe-page">
      <h1>Recipes</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

export default Recipe;
