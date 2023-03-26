import { BsFillTelephoneForwardFill } from "react-icons/bs"
import Map from "../map/Map"
import MapPointer from "../map/MapPointer"
import {  GrMail } from "react-icons/gr"
import { IoLocationSharp, IoTime } from "react-icons/io5"


     


const location = {
  address: 'Kutlu bey mahallesi 1002 sokak Şükran Sit. K.1 No:10 Isparta MERKEZ, 32000 Merkez/Isparta',
  lat: 37.7652099520949,
  lng: 30.555906638387402,
}

const HomeC = () => {
  return (
    <>
    <div className="text-center text-white">
      <h2 className="text-6xl border-b-2 w-96 mx-auto mb-10">İLETİŞİM</h2>
      <div className="mb-10">
      <h3 className="text-4xl mb-1">Önleyici Hukuk Hizmeti</h3>
      <p className="text-lg mb-1">Bir çok hukuksal problemler  önceden alınack önlemler ile 
        daha oluşmadan önlenebilr yada lehinize dönüştürülebilir.</p>
      </div>
      <div className="flex flex-wrap justify-center items-center p-5 mb-10 gap-1">
       
        <div className="w-[30%] max-md:w-[90%] flex flex-col flex-wrap justify-center items-center h-80 border-[1px] rounded-xl border-gray-500 bg-[rgba(0,0,0,0.8)]">
          <BsFillTelephoneForwardFill className="text-blue-700 mb-5 text-5xl inline-block"/>
          <p className="ml-5">0 (555) 555 5555</p>
        </div>
        <div className="w-[30%] max-md:w-[90%] flex flex-col flex-wrap justify-center items-center h-80 border-[1px] rounded-xl border-gray-500 bg-[rgba(0,0,0,0.8)]">
          <GrMail className="text-green-700 mb-5 text-5xl inline-block"/>
          <p>mail@email.com</p>
        </div>
        <div className="w-[30%] max-md:w-[90%] flex flex-col flex-wrap justify-center items-center h-80 border-[1px] rounded-xl border-gray-500 bg-[rgba(0,0,0,0.8)]">
          <IoLocationSharp className="text-orange-700 mb-5 text-5xl inline-block"/>
          <p>Kutlu bey mahallesi 1002 sokak Şükran Sit. K.1 No:10 Isparta MERKEZ, 32000 Merkez/Isparta</p>
        </div>
        
      </div>
      
      <MapPointer/> 
      

      
    </div>
    
    </>
  )
}

export default HomeC