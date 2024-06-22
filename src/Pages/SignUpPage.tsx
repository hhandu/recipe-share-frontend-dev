import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Header from '@/components/Header';
import Footer from '@/components/footer';
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface IFormInputs {
    name: string;
    email: string;
    password: string;
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

const SignupPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    return (
        <div>
            <Header />
            <div className='flex h-screen justify-center items-center'>
                <Card className="bg-gray-100 rounded-lg text-lg">
                    <CardHeader>
                        <CardTitle className='text-center text-2xl font-bold font-serif'>
                            <span className='text-orange-500'>Sign</span>
                            <span className='text-blue-500'> Up</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="name" className="py-2 font-xl font-serif">Name:</Label>
                                <Input
                                    className="py-2"
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required',
                                        },
                                        minLength: {
                                            value: 3,
                                            message: 'Name must be at least 3 characters long',
                                        }
                                    })}
                                />
                                {errors.name && <p className='text-orange-500'>{errors.name?.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="email" className="py-2 font-xl font-serif">Email:</Label>
                                <Input
                                    className="py-2"
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required',
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Provide a valid email',
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
                                    placeholder="Password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                />
                                {errors.password && <p className='text-orange-500'>{errors.password?.message}</p>}
                            </div>
                            <input className="py-2" type="submit" value="Sign Up" />
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>
                            Already have an account? <Link className='text-sm text-blue-500' to="/login">Log In</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default SignupPage;
