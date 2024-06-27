
// The purpose of this component is to render a mobile navigation menu using a sliding sheet.
// It includes links to the login and recipe pages, styled with custom buttons.
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to <span className="text-orange-500">Recipe</span><span className="text-blue-500">Share</span></span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Link to="/login" className="flex-1">
                        <Button className="w-full font-bold bg-orange-500 text-white">Login</Button>
                    </Link>
                </SheetDescription>
                <Separator />
                <SheetDescription className="flex">
                    <Link to="/recipe" className="flex-1">
                        <Button className="w-full font-bold bg-orange-500 text-white">Recipe</Button>
                    </Link>
                </SheetDescription>

            </SheetContent>
        </Sheet>
    )
};

export default MobileNav;
