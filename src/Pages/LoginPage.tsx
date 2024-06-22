// this is the log in page all the necessary packages are imported here. React hook form used for validation.
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
    email:string,
    value: RegExp,
    message:string,
    password: string,
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

const LoginPage = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    return (

        <div>
            <Header></Header>
            <div className='flex  h-screen justify-center items-center'>

                <Card className="bg-gray-100 rounded-lg text-lg">
                    <CardHeader>
                        <CardTitle className='text-center text-2xl font-bold font-serif'> <span className='text-orange-500' >Log</span> <span className='text-blue-500'> In</span></CardTitle>
        
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                <Label htmlFor="email"className="py-2 font-xl font-serif">Email:</Label>
                                <Input
                                 className="py-2"
                                 type="email" 
                                 id="email" 
                                 placeholder=" your email"

                                 
                                 {...register("email", {
                                    required:{
                                        value: true,
                                        message:'email is required',
                                    },
                                    pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'provide a valid email'
                                  }})} 
                                  />
                                  {errors.email && <p className='text-orange-500'>{errors.email?.message}</p>}
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                                 <Label htmlFor="password"className="py-2 font-xl font-serif">Password:</Label>
                                 <Input 
                                 className="py-2"
                                 type="password"
                                 id="password"
                                 placeholder="password"

                                 {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                 ></Input>
                                 {errors.password && <p className='text-orange-500'>{errors.password?.message}</p>}
                            </div>
                    
                            
                            <input className="py-2" type="submit" />
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>New to <span className='text-orange-500' >Recipe</span><span className='text-blue-500'>Share</span> <Link className='text-sm ' to="/signup">Create new Account</Link></p>
                    </CardFooter>
                </Card>


            </div>


            <Footer></Footer>
        </div>

    );

};

export default LoginPage;