import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../assets/pic 1.jpg';
import pic2 from '../assets/pic 2.jpg';
import pic3 from '../assets/pic 3.jpg';
const Banners = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-3xl py-2 mx-auto'>Make mealtime a breeze</h2>
            <Carousel className='p-5'>
            
            <div> <img src={pic1}/></div>
            <div> <img src={pic2}/></div>
            <div> <img src={pic3}/></div>
    
            </Carousel>
        </div>
    );
};

export default Banners;