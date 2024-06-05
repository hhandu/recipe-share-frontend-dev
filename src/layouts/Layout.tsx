import Banners from "@/components/Banners";
import Header from "@/components/Header";


type Props ={
 children:React.ReactNode;
}

const Layout = ({children}:Props)=>{

    return (
    <div className="flex flex-col min-h-screen">
         <Header></Header>
         <Banners></Banners>
         
        <div className="container mx-auto flex-1 py-10">

            {children}

        </div>
    </div>)

}

export default Layout;