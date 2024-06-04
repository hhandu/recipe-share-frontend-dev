// this section is the mobile view of the navbar 

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span> Welcome to <span className="text-orange-500">Recipe</span><span className="text-blue-500">Share</span></span>
                </SheetTitle>
                <Separator />
                
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log in</Button>


                </SheetDescription>
            </SheetContent>

        </Sheet>

    )

};

export default MobileNav;