const { CityService } = require('../services/index');
const cityService = new CityService();
const create = async(req,res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
        data : city,
        success : true,
        message : "City Successfully Created",
        err:{}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        data: {},
        success : false,
        message : "City Creation Unsucessful",
        err:error
    });
  }
}
const destroy = async(req,res) =>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "City Successfully Deleted",
            err:{}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            message : "Not able to Delete City",
            err:error
        });
      }
    
}
const get = async(req,res) =>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            message : "City Successfully Fetched",
            err:{}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            message : "Not able to find the City",
            err:error
        });
      } 
}
const update  = async(req,res) =>{
    try {
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data : response,
            success : true,
            message : "City Successfully Updated",
            err:{}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success : false,
            message : "Not able to update the City",
            err:error
        });
      } 
}
 
const getAll = async (req,res) =>{
  try {
     const cities = await cityService.getAllCities();
      return res.status(200).json({
      data : cities,
      success : true,
      message : "City Successfully Fetched",
      err:{}
  });
  } catch (error) {
      console.log(error);
      return res.status(500).json({
          data: {},
          success : false,
          message : "Not able to fetch all the Cities",
          err:error
        });
    }
}
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}