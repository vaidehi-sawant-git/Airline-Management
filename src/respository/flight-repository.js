const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository{

    #createfilter(data) //private function declaration is done by #
    {
        let filter = {};
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirportId;
        }
    // if(data.minPrice && data.maxPrice){
    //     Object.assign(filter, {
    //         [Op.and] : [
    //             { price: {[Op.lte]: data.maxPrice} },
    //             { price: {[Op.gte]: data.minPrice} }
    //         ]
    //     });
    // }
        let pricefilter = [];
        if(data.minPrice)
        {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            pricefilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if(data.maxPrice)
        {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            pricefilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter,{[Op.and]: pricefilter});
        return filter;

    }

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
    async getFlight(flightId)
    {
        try {
            const flights = await Flight.findByPk(flightId);
            return flights;
                
            } 
            catch (error) {
                console.log("Something went wrong in the flight repository layer");
                throw{error};
            }
    }
    async getAllFlights(filter)
    {
        try {
            const filterObject = this.#createfilter(filter);
            const flights = await Flight.findAll(
                {
                    where:filterObject,
                }
            );
            return flights;   
            } 
            catch (error) {
                console.log("Something went wrong in the flight repository layer");
                throw{error};
            }
    }
}

module.exports = FlightRepository;

/*

    Object.assign('passing the object that needs to be copied', {assign other properties on copied object})
    ex: 
        filter = {arrivalAirportId : 3}
        Object.assign(filter, {departureAirportId : 4});

        filter object will look like:
            {
                arrivalAirportId : 3,
                departureAirportId : 4
            }
    

    where query from getAllFlight will look like  this if destructured:
        {
            where: {
                arrivalAirportId : 3,
                departureAirportId : 4,
                price: {[Op.gte]: data.minPrice} =>prices greater than equal to minPrice
            }
        }
 */