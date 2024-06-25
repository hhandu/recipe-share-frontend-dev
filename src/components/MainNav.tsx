
// this section is the main navigation layout of the website
import { Link } from "react-router-dom";

import { Button } from "./ui/button";


const MainNav = () => {
    return (
        <div>
          <Button
          variant="ghost"
          className="font-bold hover:
          text-orange-500 hover:bg-white"><Link to="/recipe">Go to Recipe </Link></Button>
          <Button
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"><Link to="/login"> Login</Link>
        </Button>
       
        </div>
    );
};

export default MainNav;