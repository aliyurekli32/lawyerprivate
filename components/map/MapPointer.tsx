import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import "ol/ol.css";
import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";


let lIcon="https://cdn.jsdelivr.net/npm/rlayers/examples/svg/location.svg";



const coords: Record<string, Coordinate> = {
  origin: [30.555906638387402, 37.7652099520949],
  ArcDeTriomphe: [30.555906638387402, 37.7652099520949],
};
const  MapPointer = () => {
  return (
    <div className='w-[50%] max-md:w-[85%] h-[50%] mx-auto relative'>
    <RMap
      width={'100%'} height={'60vh'}
      className="example-map"
      initial={{ center: fromLonLat(coords.origin), zoom: 17 }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle >
          <RStyle.RIcon src={lIcon} anchor={[0.5, 0.8]} />
          
        </RStyle.RStyle>
        <RFeature
          geometry={new Point(fromLonLat(coords.ArcDeTriomphe))}
          onClick={(e) =>
            e.map.getView().fit(e.target.getGeometry()!.getExtent(), {
              duration: 250,
              maxZoom: 18,
            })
          }
        >
          <ROverlay className="example-overlay">
            Büro
            <br />
            <em>&#11017; Zoom için tıkla</em>
          </ROverlay>
        </RFeature>
      </RLayerVector>
    </RMap>
    </div>
  );
}

export default MapPointer;