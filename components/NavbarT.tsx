import { BsFillTelephoneForwardFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { IoTime } from "react-icons/io5"

const NavbarT = () => {
  return (
    <>
    <div className="navbar max-md:hidden text-slate-500 justify-center">
   
    <div className="navbar-center ">
    <BsFillTelephoneForwardFill className="text-blue-700 mr-2 text-2xl"/><a className="btn btn-ghost text-white normal-case text-base">0 (555) 555 5555</a>
    
    <GrMail className="text-green-700 ml-2 text-2xl"/> <a className="btn btn-ghost text-white normal-case text-base">mail@email.com</a>
    
    <IoTime className="text-orange-700 text-2xl"/>  <a className="btn btn-ghost text-white normal-case text-base">Pzt-Cuma 09:00-18:00</a>
    </div>
   
  </div></>
  )
}

export default NavbarT