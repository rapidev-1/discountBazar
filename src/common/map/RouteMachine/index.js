import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";


const CreateRoutineMachineLayer = ({ destination, source }) => {
    console.count("called")
    const map = useMap()
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(source[0], source[1]),
            L.latLng(destination[0], destination[1]),
        ],
        lineOptions: {
            styles: [{ color: "#0081C9", weight: 6 }]
        },
        show: true,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: true,
        createMarker: function () {
            return null;
        }

    });

    // instance.on("routesfound", function (e) {
    //     e.routes[0].coordinates.forEach((coord, i) => {
    //         setInterval(() => {

    //         }, 1000);
    //     })
    // }).addTo(map)

    return instance;

};

const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

export default RoutingMachine;



