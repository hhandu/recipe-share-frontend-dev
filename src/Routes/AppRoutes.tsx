//the purpose of this section is to keep all the necessary routes of the project here and then export this file to main.tsx.

import HomePage from "@/Pages/HomePage";
import LoginPage from "@/Pages/LoginPage";
import SignupPage from "@/Pages/SignUpPage";
import YourRecipePage from "@/Pages/YourRecipePage";
import PrivateRoute from "@/components/PrivateRoute";


import Recipe from "@/components/Recipe";
import Layout from "@/layouts/Layout";

import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}></Route>
            <Route path="/recipe" element={<Recipe></Recipe>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
            <Route path="/your-recipes" element={
                <PrivateRoute>
                    <YourRecipePage/>
                </PrivateRoute>
            } />


            <Route path="*" element={<Navigate to="/" />}></Route>



        </Routes>
    )
};
export default AppRoutes;