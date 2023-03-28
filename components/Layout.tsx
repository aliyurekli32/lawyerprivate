import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavbarT from "./NavbarT";
import { TfiInstagram } from 'react-icons/tfi';


type PropChild ={
  children:React.ReactNode
}

const Layout = ({children}:PropChild) => {
  

  return <div className="hmA-bgB">
    <div className="bg-[rgba(0,0,0,0.6)]">
    <NavbarT/>
  <Navbar />
  <div className="fixed text-5xl text-green-500 cursor-pointer active:scale-90 left-2 top-[50%] transition duration-200 ease-in-out z-50"><FaWhatsappSquare/></div>
  <div className="fixed text-5xl text-blue-600 cursor-pointer active:scale-90 left-2 top-[60%] transition duration-200 ease-in-out z-50"><FaFacebookF/></div>
  <div className="fixed text-5xl instagram cursor-pointer active:scale-90 left-2 top-[70%] transition duration-200 ease-in-out z-50"><TfiInstagram/></div>
  <main>
  {children}
  </main>
  <Footer/>

    </div>
  
  </div>;
};

export default Layout;
