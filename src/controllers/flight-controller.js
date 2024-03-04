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
module.exports = {
    create,
}