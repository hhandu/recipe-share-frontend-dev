// the purpose of this section is to create a responsive carousel for the website. it will show three picture  one by one when an indicator is clicked. For making the carousel react-responsive-carousel library is used.
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../assets/pic 1.jpg';
import pic2 from '../assets/pic 2.jpg';
import pic3 from '../assets/pic 3.jpg';

const Banners = () => {
    return (
        <div className='bg-cream-100 mx-auto'>
            <h2 className='font-bold text-center text-3xl py-2 mx-auto text-blue-400'>Make <span className='text-orange-500'>mealtime a </span> Breeze</h2>
            <Carousel className='w-full rounded-lg md:px-24'>

                <div className='max-h-[650px]'> <img src={pic1} /></div>
                <div className='max-h-[650px]'> <img src={pic2} /></div>
                <div className='max-h-[650px]'> <img src={pic3} /></div>

            </Carousel>
        </div>
    );
};

export default Banners;