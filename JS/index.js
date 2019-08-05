import MilitaryPlane from './Planes/MilitaryPlane';
import PassengerPlane from './Planes/PassengerPlane';
import Airport, { print } from './Airport';
import { TYPE_BOMBER, TYPE_FIGHTER, TRANSPORT } from './models/MilitaryType';
import experimentalPlane from './Planes/experimentalPlane';
import { HIGH_ALTITUDE, VTOL } from './models/ExperimentalTypes';
import { SECRET, TOP_SECRET } from './models/ClassificationLevel';

(function run() {

    const planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, TYPE_BOMBER),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, TYPE_BOMBER),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, TYPE_BOMBER),
        new MilitaryPlane('F-15', 1500, 12000, 10000, TYPE_FIGHTER),
        new MilitaryPlane('F-22', 1550, 13000, 11000, TYPE_FIGHTER),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, TRANSPORT),
        new experimentalPlane("Bell X-14", 277, 482, 500, HIGH_ALTITUDE, SECRET),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, VTOL, TOP_SECRET)
    ];

    const airport = new Airport(planes);
    const militaryAirport = new Airport(airport.getMilitaryPlanes());
    const passengerAirport = new Airport(airport.getPasPl());
    console.log(`Military airport sorted by max distance: ${print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();
