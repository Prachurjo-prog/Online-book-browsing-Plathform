import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/Navbar";


const layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;