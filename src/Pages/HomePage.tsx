import { Button } from '@/components/ui/button';
import pic4 from '../assets/pic 4.jpg'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');
    };
    return (
        <div className="className=flex flex-col bg-slate-200 px-16">
            <div className="grid md:grid-cols-2">
                <img className='max-h-[600px] p-3 rounded-lg' src={pic4} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-4xl tracking-tighter">
                        Save your own recipe
                    </span>
                    <span className='text-lg'>
                        No matter what you save in <span className='text-orange-500' >Recipe</span><span className='text-blue-500'>Share</span> recipe instruction,  or food ingredient  everything is visible to other, meaning in the recipe section you can see your own recipe. Don’t like the recipe, check some other recipe, <span className='text-orange-500'>Recipe</span><span className='text-blue-500'>Share</span> will make your cooking easy.
                    </span>
                    <h4 className='text-lg font-bold'> Do you want to add your own recipe? </h4>
                    <Button className='bg-orange-500 font-medium' onClick={handleButtonClick}>
                        Add Your Own Recipe
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default HomePage;