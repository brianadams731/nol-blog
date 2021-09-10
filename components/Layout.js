import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const Layout = ({ children }) =>{
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout;