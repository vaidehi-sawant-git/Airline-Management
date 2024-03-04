const { Flight } = require('../models/index');

class FlightRepository{

    async createFlight(data)
    {
        try {
        const flights = await Flight.create(data);
        return flights;
            
        } 
        catch (error) {
            console.log("Something went wrong in the flight repository layer");
            throw{error};
        }
        
    }
}

module.exports = FlightRepository;