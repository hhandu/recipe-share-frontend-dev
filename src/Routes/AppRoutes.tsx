//the purpose of this section is to keep all the necessary routes of the project here and then export this file to main.tsx.

import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return(

        <Routes>
            <Route path="/" element= {<span>Home</span>}></Route>
            <Route path="/recipe" element= {<span>Recipe</span>}></Route>
            <Route path="*" element= {<Navigate to ="/"/>}></Route>



        </Routes>
    )
};
export default AppRoutes;