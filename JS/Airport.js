const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

class Airport {

     getPasPl() {
        const x = [];
        for (const p of this.planes) {
            if (p instanceof PassengerPlane) {x.push(p);}
        }
        return x;
    }

    getMilitaryPlanes() {
        const militaryPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof MilitaryPlane) {//if
                militaryPlanes.push(plane);
            }
          });
//return
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.getPasPl();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() >     planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }


    getTransportMilitaryPlanes(){
        const transportMilitaryPlanes = [];
        const militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
        if (militaryPlanes[i].getMilitaryType() == MilitaryType.TYPE_TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i]);
        }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        const bomberMilitaryPlanes = [];
        const militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType()=== MilitaryType.BOMBER) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }


    getExperimentalPlanes() {
        const experimentalPlanes  = [];
        this.planes.forEach(plane => {
            if (plane instanceof experimentalPlane) {//if
                experimentalPlanes.push(plane);
            }
        });
//return
        return experimentalPlanes;
    }


    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.Get_Max_Flight_Distance() > b.Get_Max_Flight_Distance()) ? 1 : -1);
        return this;
    }

    /**
     * Sorts by max speed
     * @return Airport
     */
    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMS() > b.getMS()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? 1 : -1);
        return this;
    }

    getPlanes() {
        return this.planes;
    }


    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
