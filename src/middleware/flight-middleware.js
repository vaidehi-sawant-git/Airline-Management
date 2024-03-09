//filter out any request that is not abiding to our list/set of API contracts
const ValidateCreateFlight = (req,res,next) =>
{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    )
    {
        return res.status(400).json({
            data:{},
            success:false,
            err:'Missing mandatory properties to create a flight',
            message:"Invalid request body for creating a flight"
        })
    }
    next();
    
} 
module.exports={
    ValidateCreateFlight
}