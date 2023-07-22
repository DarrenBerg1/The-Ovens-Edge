import {GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';


function ThisMap(){
  
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCKAxlvw_1cY-0Dz8dHQYTLwhf5-pIo8oI",
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return (<div className="map">
    <div className='map-container'>
    <GoogleMap 
    zoom={20} 
    center={{lat: 38.804959915676264, lng:  -77.04671329292813}}
    mapContainerClassName="map-container"
  >
  <MarkerF position={{lat: 38.804959915676264, lng:  -77.04671329292813}} title='The Ovens Edge'/>
  </GoogleMap>
    </div> 
    </div>
  )
}
export default ThisMap