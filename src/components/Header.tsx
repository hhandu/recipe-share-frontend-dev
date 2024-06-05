// this section is the header section of the website. In this section link is imported from react-router-dom . this section will show the mobile or main navigation of the header.

import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import MainNav from "./MainNav";


const Header = () => {
    return (
        <div className="border-b-2 border-b-orange-500">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/"className="text-3xl font-bold tracking-tight text-orange-500"> Recipe<span className="text-blue-500">Share</span></Link>
                <div className="md:hidden"> <MobileNav></MobileNav></div>
                <div className="hidden md:block"><MainNav></MainNav></div>
                
            </div>



        </div>
    );
};

export default Header;