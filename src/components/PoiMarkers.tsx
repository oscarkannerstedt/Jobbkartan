import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { PointOfInterest } from "../models/PointOfInterest"; 


// To mark with pins of map
// adjust whenJobAds are implemented
export const PoiMarkers = (props: {pois: PointOfInterest[]}) => {
    return (
      <>
        {props.pois.map( (poi: PointOfInterest) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
          <Pin background={'#a00eda'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
        ))}
      </>
    );
  };