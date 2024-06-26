import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
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

interface IFormInputs {
    title: string;
    subtitle: string;
    instructions: string;
    ingredients: string;
}

const YourRecipePage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        try {
            const response = await axios.post("YOUR_BACKEND_API_URL/recipes", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log("Recipe saved:", response.data);
        } catch (error) {
            console.error("Error saving recipe:", error);
        }
    };

    return (
        <div>
            <Header></Header>
            <div className="flex justify-center items-center min-h-screen">
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
                                <Label htmlFor="subtitle">Subtitle</Label>
                                <Input id="subtitle" {...register("subtitle", { required: "Subtitle is required" })} />
                                {errors.subtitle && <p className="text-red-500">{errors.subtitle.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="instructions">Instructions</Label>
                                <Input id="instructions" {...register("instructions", { required: "Instructions are required" })} />
                                {errors.instructions && <p className="text-red-500">{errors.instructions.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="ingredients">Ingredients</Label>
                                <Input id="ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
                                {errors.ingredients && <p className="text-red-500">{errors.ingredients.message}</p>}
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
            <Footer></Footer>
        </div>
    );
};

export default YourRecipePage;
