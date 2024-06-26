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

interface IFormInputs {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    password: string;
}

const SignupPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

    const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
        try {
            const response = await axios.post('https://recipe-share-api.vercel.app/auth/register/', data); // Adjust the endpoint based on your backend API
            console.log('Response from backend:', response.data);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className='flex flex-1 justify-center items-center py-2'>
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
                                <Label htmlFor="firstName" className="py-2 font-xl font-serif">First Name:</Label>
                                <Input
                                    className="py-2"
                                    type="text"
                                    id="firstName"
                                    placeholder="Your first name"
                                    {...register("firstName", {
                                        required: 'First name is required',
                                        minLength: { value: 2, message: 'First name must be at least 2 characters long' }
                                    })}
                                />
                                {errors.firstName && <p className='text-orange-500'>{errors.firstName.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="lastName" className="py-2 font-xl font-serif">Last Name:</Label>
                                <Input
                                    className="py-2"
                                    type="text"
                                    id="lastName"
                                    placeholder="Your last name"
                                    {...register("lastName", {
                                        required: 'Last name is required',
                                        minLength: { value: 2, message: 'Last name must be at least 2 characters long' }
                                    })}
                                />
                                {errors.lastName && <p className='text-orange-500'>{errors.lastName.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="gender" className="py-2 font-xl font-serif">Gender:</Label>
                                <select
                                    className="py-2"
                                    id="gender"
                                    {...register("gender", { required: 'Gender is required' })}
                                >
                                    <option value="">Select gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="CUSTOM">other</option>
                                </select>
                                {errors.gender && <p className='text-orange-500'>{errors.gender.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="email" className="py-2 font-xl font-serif">Email:</Label>
                                <Input
                                    className="py-2"
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                {errors.email && <p className='text-orange-500'>{errors.email.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="password" className="py-2 font-xl font-serif">Password:</Label>
                                <Input
                                    className="py-2"
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                />
                                {errors.password && <p className='text-orange-500'>{errors.password.message}</p>}
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="py-2 bg-orange-400 text-white rounded" type="submit">Sign Up</button>
                            </div>
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
