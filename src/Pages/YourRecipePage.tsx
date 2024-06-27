import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

interface IFormInputs {
    title: string;
    subTitle: string;
    instructions: string;
    ingredients: string;
    prepTime: string;
    cookTime: string;
    categories: string;
    tags: string;
}

const YourRecipePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    const [categories, setCategories] = useState<object[]>([]); 

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://recipe-share-api.vercel.app/categories", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            const data = await response.json();
            setCategories(data); 
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        console.log(data)
        
        const payload = {
            ...data,
            ingredients: data.ingredients.split(',').map(ingredient => ingredient.trim()),
            //categories: ['667a8be47160ce017daa2728'], 
            categories: [data.categories],
            tags: data.tags.split(',').map(tag => tag.trim())
        };

        console.log("Submitting data:", payload);
        try {
            const response = await fetch("https://recipe-share-api.vercel.app/recipes", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
            }

            const responseData = await response.json();
            console.log("Recipe saved:", responseData);
        } catch (error) {
            console.error("Error saving recipe:", error);
        }
    };
    useEffect(() => {
        fetchCategories(); 
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex justify-center items-center">
                <Card className="w-full max-w-lg p-4">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl font-bold font-serif">
                            Submit Your Recipe
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" {...register("title", { required: "Title is required" })} />
                                {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="subTitle">Subtitle</Label>
                                <Input id="subTitle" {...register("subTitle", { required: "Subtitle is required" })} />
                                {errors.subTitle && <p className="text-red-500">{errors.subTitle.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="instructions">Instructions</Label>
                                <Input id="instructions" {...register("instructions", { required: "Instructions are required" })} />
                                {errors.instructions && <p className="text-red-500">{errors.instructions.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="ingredients">Ingredients (comma separated)</Label>
                                <Input id="ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
                                {errors.ingredients && <p className="text-red-500">{errors.ingredients.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="prepTime">Preparation Time</Label>
                                <Input id="prepTime" {...register("prepTime", { required: "Preparation time is required" })} />
                                {errors.prepTime && <p className="text-red-500">{errors.prepTime.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="cookTime">Cooking Time</Label>
                                <Input id="cookTime" {...register("cookTime", { required: "Cooking time is required" })} />
                                {errors.cookTime && <p className="text-red-500">{errors.cookTime.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="categories">Categories</Label>
                                <select id="categories" {...register("categories", { required: "Categories are required" })}>
                                    <option value="">Select a category...</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.description}</option>
                                    ))}
                                </select>
                                {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="tags">Tags (comma separated)</Label>
                                <Input id="tags" {...register("tags", { required: "Tags are required" })} />
                                {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
                            </div>
                            <button type="submit" className="w-full py-2 mt-4 bg-orange-400 text-white rounded">
                                Submit
                            </button>
                        </form>
                    </CardContent>
                    <CardFooter className="text-center font-medium">
                        <p>Thank you for sharing your recipe with us!</p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default YourRecipePage;
