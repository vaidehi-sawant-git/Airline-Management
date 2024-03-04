const {FlightService} = require('../services/index');

const flightservice = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully created a flight',
            err:{} 
        })
    } 
    catch (error) {
        console.log('error');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err: error
        })
    }
}
const getAll = async (req,res) => {
    try {
        const flight = await flightservice.getAllFlights(req.query);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully fetched a flight',
            err:{} 
        })
    } 
    catch (error) {
        console.log('error');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the flights',
            err: error
        })
    }
}
const get = async (req,res) => {
    try {
        const flight = await flightservice.getFlight(req.params.id);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully fetched a flight',
            err:{} 
        })
    } 
    catch (error) {
        console.log('error');
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the flights',
            err: error
        })
    }
}
module.exports = {
    create,
    getAll,
    get,
}