import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { RMap, ROSM } from 'rlayers';
import { ImLocation } from 'react-icons/im';

const Map = () => {
  return (
    <div className='w-[50%] h-[50%] mx-auto relative'>
        <RMap width={'100%'} height={'60vh'} initial={{ center: fromLonLat([30.555906638387402, 37.7652099520949]), zoom: 18 }}>
            <ROSM />
            
        </RMap>
        <ImLocation className="absolute text-red-700 left-[50%] top-[50%]"/>
    </div>
    
  )
}

export default Map