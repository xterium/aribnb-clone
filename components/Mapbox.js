import { useState } from "react";
import { getCenter } from "geolib";
import { Image } from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Mapbox = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const coords = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  const mapCenter = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: mapCenter.latitude,
    longitude: mapCenter.longitude,
    zoom: 15,
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/xterium/ckuqw4ex70rja18pc8k01470i"}
      mapboxApiAccessToken={process.env.mapbox_token}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      {...viewport}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-9}
            offsetTop={0}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📍
            </p>
          </Marker>

          {selectedLocation?.long === result.long && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="rounded-full"
            >
              <img
                src={result.img}
                className="h-full w-full rounded-2xl object-cover"
                alt={result.title}
              />
              <div class="absolute font-semibold max-w-[200px] text-white z-20 bottom-5 left-4">
                <div>
                  <h3 class="">{result.title}</h3>
                  <h4 class="text-xl">{result.price}</h4>
                </div>
                <p class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-6 text-red-400"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  5
                </p>
                <div></div>
              </div>
              <span class=" w-full absolute  bottom-0 z-10 pointer-events-none transform   p-24 bg-gradient-to-t from-gray-800 "></span>
            </Popup>
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Mapbox;
