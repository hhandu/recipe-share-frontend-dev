import pic4 from '../assets/pic 4.jpg'

const HomePage = () => {
    return (
        <div className="className=flex flex-col bg-slate-200 px-16">
            <div className="grid md:grid-cols-2">
                <img className='max-h-[600px] p-3 rounded-lg' src={pic4} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-4xl tracking-tighter">
                    Save it with visuals
                    </span>
                    <span className='text-lg'>
                    No matter what you save in <span className='text-orange-500' >Recipe</span><span className='text-blue-500'>Share</span> recipe instruction,  or food photos  everything is visual, meaning folders and items have images and titles. Don’t like the image, change it or drag and drop or upload your own photo. Whether at the grocery store or cooking, <span className='text-orange-500'>Recipe</span><span className='text-blue-500'>Share</span> helps you find what you are looking for faster with visuals.
                    </span>
                </div>
            </div>
        </div>
            
    );
};

export default HomePage;