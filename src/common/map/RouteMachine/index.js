// import L from "leaflet";
// import { createControlComponent } from "@react-leaflet/core";
// import "leaflet-routing-machine";


// const CreateRoutineMachineLayer = ({ destination, source }) => {

//     if (!Array.isArray(source) || !Array.isArray(destination)) {
//         console.log("returning not array");
//         return null
//     }
//     if (!source || !destination) {
//         console.log("returning not values");

//         return null;
//     }

//     const instance = L.Routing.control({
//         waypoints: [
//             L.latLng(source[0], source[1]),
//             L.latLng(destination[0], destination[1]),
//         ],
//         lineOptions: {
//             styles: [{ color: "#0081C9", weight: 6 }]
//         },
//         altLineOptions: {
//             styles: [{ color: "red", weight: 6 }]
//         },

//         // show: true,
//         addWaypoints: false,
//         routeWhileDragging: true,
//         draggableWaypoints: false,
//         fitSelectedRoutes: true,
//         showAlternatives: true,
//         autoRoute: true

//     });
//     return instance;
// };

// const RoutingMachine = createControlComponent(CreateRoutineMachineLayer);

// export default RoutingMachine;


import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const CreateRoutingMachineLayer = ({ destination, source }) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(source[0], source[1]),
            L.latLng(destination[0], destination[1]),
        ],
        lineOptions: {
            styles: [{ color: "#0081C9", weight: 6 }],
        },
        altLineOptions: {
            styles: [{ color: "red", weight: 6 }],
        },
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
        autoRoute: true,
        createMarker: function () { return null; } // add this line to remove markers

    });

    return instance;
};

const RoutingMachine = createControlComponent(CreateRoutingMachineLayer);

export default RoutingMachine;



