import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ destination, source }) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(source[0], source[1]),
            L.latLng(destination[0], destination[1]),
        ],
        lineOptions: {
            styles: [{ color: "#0081C9", weight: 6 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
        createMarker: function () {
            return null;
        }
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
