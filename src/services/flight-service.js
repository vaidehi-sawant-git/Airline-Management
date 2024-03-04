const {FlightRepository,AirplaneRepository} = require('../respository/index');
const { compareTime } = require('../utils/helper');

class FlightService{

    constructor()
    {
        this.airplaneRepository = new AirplaneRepository(); 
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data)
    {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime))
            {
                throw{error:'Arrival Time cannot be less than the Departure Time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats: airplane.capacity      //...data is destructuring object and adding the property to it
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight service layer");
            throw{error};
        }
    }   
}

module.exports = FlightService;
/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * totalSeats -> airplane
 * 
 */