
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

interface IFormInputs {
    firstName: string,
    lastName: string,
    email:string,
    value: RegExp,
    message:string
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
                        <CardTitle className='text-center text-2xl font-bold'> Log in</CardTitle>
        
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="email"className="py-2">Email</Label>
                                <Input
                                 className="py-2"
                                 type="email" 
                                 id="email" 
                                 placeholder=" your email"

                                 
                                 {...register("email", {pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'error message'
                                  }})} 
                                  />
                            </div>
                    
                            {errors.firstName && "First name is required"}
                            <input {...register("lastName", { required: true })} />
                            {errors.lastName && "Last name is required"}
                            <input type="submit" />
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>


            </div>


            <Footer></Footer>
        </div>

    );

};

export default LoginPage;