import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/footer';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button } from "@/components/ui/button";

interface IFormInputs {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    // const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        try {
            const response = await axios.post('https://recipe-share-api.vercel.app/auth/login/', data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Login successful', response.data);
            //navigate('/your-recipes');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className='flex h-screen justify-center items-center'>
                <Card className="bg-gray-100 rounded-lg text-lg">
                    <CardHeader>
                        <CardTitle className='text-center text-2xl font-bold font-serif'>
                            <span className='text-orange-500'>Log</span> <span className='text-blue-500'>In</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="email" className="py-2 font-xl font-serif">Email:</Label>
                                <Input
                                    className="py-2"
                                    type="email"
                                    id="email"
                                    placeholder="your email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required',
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                {errors.email && <p className='text-orange-500'>{errors.email?.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="password" className="py-2 font-xl font-serif">Password:</Label>
                                <Input
                                    className="py-2"
                                    type="password"
                                    id="password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                />
                                {errors.password && <p className='text-orange-500'>{errors.password?.message}</p>}
                            </div>
                            <div className="flex justify-center mt-4">
                                <Button className="py-2 my-2 bg-orange-400 text-white rounded" type="submit">login</Button>
                            </div>

                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>New to <span className='text-orange-500'>Recipe</span><span className='text-blue-500'>Share</span>. <Link className='text-sm text-orange-500' to="/signup">Create new Account</Link></p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default LoginPage;
